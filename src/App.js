// libs
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

// components
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import PrivateRoute from "./components/route/PrivateRoute";
import GuestRoute from "./components/route/GuestRoute";

const App = () => {
  const auth = useSelector((state) => state.firebase.auth);

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
