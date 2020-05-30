import React, { Component } from "react";

class SignIn extends Component {
  render() {
    const handleEmailChange = (val) => {
      console.log(val);
    };

    const handlePasswordChange = (val) => {
      console.log(val);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submitted");
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
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
