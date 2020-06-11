// libs
import React from "react";

// Components
import ProjectList from "../projects/ProjectList";
import NotificationsList from "./NotificationsList";

const Dashboard = () => (
  <div className="dashboard container">
    <div className="row">
      <div className="col s12 m6">
        <ProjectList />
      </div>
      <div className="col s12 m5 offset-m1">
        <NotificationsList />
      </div>
    </div>
  </div>
);

export default Dashboard;
