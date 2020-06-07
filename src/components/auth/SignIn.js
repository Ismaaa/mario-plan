/* eslint-disable jsx-a11y/label-has-associated-control */

// libs
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import { signIn } from "../../store/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signIn({
        email,
        password,
      })
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            autoComplete="on"
            onChange={handlePasswordChange}
          />
        </div>

        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
