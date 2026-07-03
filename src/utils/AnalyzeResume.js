const keywords = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node",
  "Git",
  "SQL",
];

const analyzeResume = (text) => {
  const foundSkills = keywords.filter((skill) =>
    text.toLowerCase().includes(skill.toLowerCase())
  );

  const missingSkills = keywords.filter(
    (skill) => !foundSkills.includes(skill)
  );

  const score = Math.round(
    (foundSkills.length / keywords.length) * 100
  );

  const sections = {
    Education: /education/i.test(text),
    Skills: /skills/i.test(text),
    Projects: /project/i.test(text),
    Experience: /experience/i.test(text),
    Certifications: /certification/i.test(text),
  };

  return {
    atsScore: score,
    skills: foundSkills,
    missingSkills,
    suggestions:
      score >= 80
        ? ["Excellent resume!"]
        : [
            "Add more technical skills.",
            "Include projects.",
            "Use action verbs.",
          ],
    resumeText: text,
    sections,
  };
};

export default analyzeResume;