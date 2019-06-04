import React, { Component } from "react";
import "./SimpleReactValidation.css";

let formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SimpleReactValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
      FirstName: ${this.state.firstName}
      lastName: ${this.state.lastName}
      email: ${this.state.email}
      password: ${this.state.password}
      `);
    } else {
      console.log("error happened");
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 charecters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 Charecters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Must be valid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 3 ? "Must be 8 charecters long" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>SignUp</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className={
                    this.state.formErrors.firstName.length > 0 ? "error" : ""
                  }
                  placeholder="First Name"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                  required
                />
                {this.state.formErrors.firstName.length > 0 && (
                  <span className="errorMessage">
                    {this.state.formErrors.firstName}
                  </span>
                )}
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className={
                    this.state.formErrors.lastName.length > 0 ? "error" : ""
                  }
                  name="lastName"
                  noValidate
                  onClick={this.handleChange}
                  required
                />
                {this.state.formErrors.lastName.length > 0 && (
                  <span className="errorMessage">
                    {this.state.formErrors.lastName}
                  </span>
                )}
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className={
                    this.state.formErrors.email.length > 0 ? "error" : ""
                  }
                  name="email"
                  noValidate
                  onClick={this.handleChange}
                  required
                />
                {this.state.formErrors.email.length > 0 && (
                  <span className="errorMessage">
                    {this.state.formErrors.email}
                  </span>
                )}
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={
                    this.state.formErrors.password.length > 0 ? "error" : ""
                  }
                  name="password"
                  noValidate
                  onClick={this.handleChange}
                  required
                />
                {this.state.formErrors.password.length > 0 && (
                  <span className="errorMessage">
                    {this.state.formErrors.password}
                  </span>
                )}
              </div>

              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleReactValidation;
