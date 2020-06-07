// libs
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

// Components
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  useFirestoreConnect(["projects"]);
  const projects = useSelector((state) => state.firestore.data.projects);

  return (
    <div className="project-list section">
      {projects &&
        Object.entries(projects).map(([id, project]) => (
          <Link to={`/project/${id}`} key={id}>
            <ProjectSummary title={project.title} content={project.content} />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
