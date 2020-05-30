/* eslint-disable jsx-a11y/label-has-associated-control */

// libs
import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    /* eslint-disable react/no-unused-state */
    this.state = {
      email: "",
      password: "",
    };
    /* eslint-enable react/no-unused-state */
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
