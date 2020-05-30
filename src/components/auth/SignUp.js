/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    /* eslint-disable react/no-unused-state */
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
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
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              onChange={(e) => this.handleChange(e)}
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
  }
}

export default SignUp;
