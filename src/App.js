// libs
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

// components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

const App = () => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) return <></>;

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <ProjectDetails path="/project/:id" />
        <CreateProject path="/create" />
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
