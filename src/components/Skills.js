import React from "react";

function Skills({ analysis }) {
  if (!analysis) {
    return (
      <div className="card" style={{ padding: "20px" }}>
        <h2>Skills</h2>
        <p>Upload a resume to see matched skills.</p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h2>Skills</h2>

      <p>
        <b>Found Skills:</b>{" "}
        {analysis.skills.length
          ? analysis.skills.join(", ")
          : "None detected"}
      </p>

      <p>
        <b>Missing Skills:</b>{" "}
        {analysis.missingSkills.length
          ? analysis.missingSkills.join(", ")
          : "None 🎉"}
      </p>
    </div>
  );
}

export default Skills;