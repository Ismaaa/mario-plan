// libs
import React from "react";
import { useSelector } from "react-redux";

// Components
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  const projects = useSelector((state) => state.project.projects);

  return (
    <div className="project-list section">
      {projects.map((project) => {
        const { id, title, content } = project;
        return (
          <ProjectSummary key={id} id={id} title={title} content={content} />
        );
      })}
    </div>
  );
};

export default ProjectList;
