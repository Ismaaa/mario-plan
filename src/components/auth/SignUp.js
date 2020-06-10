/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp({
        email,
        password,
        firstName,
        lastName,
      })
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={handleEmailChange} required />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="on"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Sign Up
          </button>
        </div>
        <div className="red-text">{auth.authError}</div>
      </form>
    </div>
  );
};

export default SignUp;
