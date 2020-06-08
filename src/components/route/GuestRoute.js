// libs
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector((state) => state.firebase);
  if (auth.uid) return <Redirect to="/" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default GuestRoute;
