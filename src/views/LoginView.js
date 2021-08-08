import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import "./Views.css";
import { Button } from "@material-ui/core";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="Container">
        <div className="LoginSection">
          <h1 className="Title">Login</h1>
          <form
            onSubmit={this.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <label className="label">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter password"
              />
            </label>
            <Button type="submit" variant="contained" color="primary">
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
