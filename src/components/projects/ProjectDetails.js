/* eslint-disable react/prop-types */
// libs
import React from "react";

const ProjectDetails = ({ computedMatch }) => {
  const { id } = computedMatch.params;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">#{id} - Project Title</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            perferendis voluptatem facilis vel velit cum sequi molestias, aut
            eos natus, maxime dolorum sint possimus veniam ad eius est non quae.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ismail Didouh</div>
          <div>30th May, 2020 - 15:07</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
