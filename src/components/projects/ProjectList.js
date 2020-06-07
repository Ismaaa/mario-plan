// libs
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

// Components
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  useFirestoreConnect(["projects"]);
  const projects = useSelector((state) => state.firestore.data.projects);

  return (
    <div className="project-list section">
      {projects &&
        Object.entries(projects).map(([id, project]) => (
          <ProjectSummary
            key={id}
            title={project.title}
            content={project.content}
          />
        ))}
    </div>
  );
};

export default ProjectList;
