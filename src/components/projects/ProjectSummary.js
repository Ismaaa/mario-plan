// libs
import React from "react";
import PropTypes from "prop-types";

const ProjectSummary = ({ title, content }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by Ismail Didouh</p>
        <p className="grey-text">{content}</p>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProjectSummary;
