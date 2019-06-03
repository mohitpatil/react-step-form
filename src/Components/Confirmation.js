import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {
      values: { firstName, lastName, occupation, city, email, phone, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Your Details" showMenuIconButton={false} />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Phone" secondaryText={phone} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>

          <br />
          <RaisedButton
            label="Back"
            secondary={false}
            style={styles.btn}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm"
            secondary={true}
            style={styles.btn}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  btn: {
    margin: 15
  }
};

export default Confirmation;
