import React from "react";

function ResumePreview({ analysis }) {
  if (!analysis) {
    return (
      <div className="card" style={{ padding: "20px" }}>
        <h2>Resume Preview</h2>
        <p>Upload a resume to preview the extracted text.</p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h2>Resume Preview</h2>

      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          lineHeight: "1.6"
        }}
      >
        {analysis.resumeText}
      </div>
    </div>
  );
}

export default ResumePreview;