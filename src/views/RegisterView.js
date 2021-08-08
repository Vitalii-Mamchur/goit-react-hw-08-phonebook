import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import "./Views.css";
import { Button } from "@material-ui/core";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="Container">
        <div className="RegisterSection">
          <h1 className="Title">Create account</h1>
          <form
            onSubmit={this.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <label className="label">
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter name"
              />
            </label>
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
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
