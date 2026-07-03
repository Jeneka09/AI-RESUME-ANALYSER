import React from 'react'
import { useState } from "react";
import { extractText } from "../utils/Extractpdf";
import  analyzeResume  from "../utils/AnalyzeResume";

function UploadResume({ onAnalyze }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(selectedFile) {
    if (!selectedFile) return;
    setFile(selectedFile);
    setError("");

    if (selectedFile.type !== "application/pdf") {
      setError("Currently only PDF files are supported for analysis.");
      onAnalyze(null);
      return;
    }

    try {
      setLoading(true);
      const extracted = await extractText(selectedFile);
      setText(extracted);

      const result = analyzeResume(extracted);
      onAnalyze(result); // send the analysis up to Home
    } catch (err) {
      console.error(err);
      setError("Could not read this PDF. Please try another file.");
      onAnalyze(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3>Upload Resume</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {file && <p><b>{file.name}</b></p>}
      {loading && <p>Analyzing resume...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {text && (
        <div>
          <h4>Extracted Text Preview:</h4>
          <p style={{ fontSize: "12px" }}>
            {text.slice(0, 500)}...
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadResume
