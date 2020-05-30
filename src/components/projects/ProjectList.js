import React from "react";
import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";

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
