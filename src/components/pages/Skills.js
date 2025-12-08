// src/components/pages/Skills.js (Bootstrap Grid and Custom Tags)
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";

const Skills = () => {
  const {
    data: skillsData,
    loading,
    error,
  } = useFetch("/skills?sort=category:asc");

  if (loading) return <Loading />;
  if (error)
    return <p className="text-danger container">Error loading skills data.</p>;

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    const category = skill?.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill?.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="container">
      <h2 className="text-center text-success mb-3">🛠️ Technical Skills</h2>
      <div className="row justify-content-center">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-success border-bottom pb-2">
                  {category}
                </h4>
                <div className="d-flex flex-wrap">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
