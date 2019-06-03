import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import Confirmation from "./Confirmation";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    step: 1
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(input);
  };

  render() {
    const { step } = this.state;

    const {
      firstName,
      lastName,
      bio,
      city,
      phone,
      email,
      occupation
    } = this.state;

    const values = {
      firstName,
      lastName,
      bio,
      city,
      phone,
      email,
      occupation
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return <Confirmation />;
      case 4:
        return <Success />;
      default:
        return <UserDetails />;
    }
  }
}

export default UserForm;
