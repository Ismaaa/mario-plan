// libs
import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { BrowserRouter, Switch } from "react-router-dom";

// components
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";
import GuestRoute from "./components/route/GuestRoute";
// route guards
import PrivateRoute from "./components/route/PrivateRoute";

const App = () => {
  const { auth } = useSelector((state) => state.firebase);

  if (!isLoaded(auth)) return <></>;

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/project/:id" component={ProjectDetails} />
        <PrivateRoute path="/create" component={CreateProject} />
        <GuestRoute path="/sign-in" component={SignIn} />
        <GuestRoute path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
