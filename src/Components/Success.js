import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Wo ho!!" showMenuIconButton={false} />
          <h1> Thank you!!</h1>
          <h2>Your data has been submitted successfully !!</h2>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
