// libs
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="sign-in" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
