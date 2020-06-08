// libs
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.firebase);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" type="button" onClick={handleSubmit}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
