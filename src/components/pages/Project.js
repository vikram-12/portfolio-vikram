// src/components/pages/Project.js
import React from "react";
import useFetch from "../../hooks/useFetch";

const Project = () => {
  const { data: projectData, loading, error } = useFetch("/projects");

  let content;
  if (loading) {
    content = <div className="text-center py-5">Loading projects...</div>;
  } else if (error) {
    content = (
      <div className="text-danger text-center py-5">
        Error loading projects.
      </div>
    );
  } else if (
    !projectData ||
    !Array.isArray(projectData) ||
    projectData.length === 0
  ) {
    content = (
      <div className="text-muted text-center py-5">No projects found.</div>
    );
  } else {
    content = (
      <div className="row">
        {projectData.map((project, idx) => (
          <div className="col-md-6 mb-4" key={project.id || idx}>
            <div className="card h-100 border border-light shadow-sm">
              <div className="card-body text-start">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id="projects" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-info mb-4">
            <div className="card-body text-center">
              <h2 className="display-5 mb-4">🚀 Projects</h2>
              <p className="lead">
                Showcase of my featured work and side projects.
              </p>
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
