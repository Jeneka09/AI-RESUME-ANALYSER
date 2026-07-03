import React from 'react'

function Suggestions({ analysis }) {
  if (!analysis) {
    return (
      <div className="card" style={{ padding: "20px" }}>
        <h3>Suggestions</h3>
        <p>Upload a resume to get improvement suggestions.</p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h3>Suggestions</h3>
      <ul>
        {analysis.suggestions.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}

export default Suggestions
