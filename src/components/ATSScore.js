import React from 'react'


function ATSScore({ analysis }) {
  if (!analysis) {
    return (
      <div className="card">
        <h2>ATS Score</h2>
        <p>Upload a resume to see your ATS score.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>ATS Score</h2>

      <p>Total Keywords: {analysis.skills.length + analysis.missingSkills.length}</p>

      <p>Found Keywords: {analysis.skills.length}</p>

      <h1>{analysis.atsScore}%</h1>
    </div>
  );
}

export default ATSScore;