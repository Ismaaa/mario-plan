// libs
import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({
  title,
  content,
  authorFirstName,
  authorLastName,
}) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{title}</span>
      <p>{content}</p>
      <p className="grey-text">
        Posted by {authorFirstName} {authorLastName}
      </p>
    </div>
  </div>
);

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
};

export default ProjectSummary;
