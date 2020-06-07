// libs
import React, { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const ProjectDetails = ({ computedMatch }) => {
  const { id } = computedMatch.params;
  const [project, setProject] = useState({});
  const projects = useSelector((state) => state.firestore.data.projects);

  useFirestoreConnect(["projects"]);

  useEffect(() => {
    if (projects) {
      setProject(projects[id]);
    }
  }, [projects]);

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
};

export default ProjectDetails;
