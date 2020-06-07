// libs
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
// import CreateProject from "./components/projects/CreateProject";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <ProjectDetails path="/project/:id" />
        {/* <CreateProject path="/create" /> */}
        <SignIn path="/sign-in" />
        {/* <SignUp path="/sign-up" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
