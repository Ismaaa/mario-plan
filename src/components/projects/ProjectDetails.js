// libs
import React, { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectDetails = ({ match }) => {
  const { id } = match.params;

  const [project, setProject] = useState();
  const projects = useSelector((state) => state.firestore.data.projects);

  useFirestoreConnect(["projects"]);

  useEffect(() => {
    if (projects) {
      setProject(projects[id]);
    }
  }, [id, projects]);

  if (!project)
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project not found</span>
            <Link className="btn" to="/">
              Go back to the Dashboard
            </Link>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <span>Error 404</span>
          </div>
        </div>
      </div>
    );

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
};

export default ProjectDetails;
