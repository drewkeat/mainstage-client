import React, { Component } from "react";

export class NewAccount extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (e) => {
    return this.setState({[e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <h1>Create New Account</h1>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            name="first_name"
            placeholder="John"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            name="last_name"
            placeholder="Doe"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@email.com"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="secret password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password: </label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="make sure there's no typos"
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    );
  }
}

export default NewAccount;
