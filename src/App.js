import React, { Component } from "react";
import UserForm from "./Components/UserForm";
import SimpleReactValidation from "./Components/ValidationComponent/SimpleReactValidation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class App extends Component {
  goHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="sidenav">
            <nav>
              <h3 className="App-link">Please Select one option from here.</h3>
              <li>
                <Link to={"/step-form"} className="nav-link">
                  Step Form Example{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pure-react"} className="nav-link">
                  Pure React form with Validation
                </Link>
              </li>
            </nav>
          </div>
          <h2>Welcome to React Form Examples</h2>

          <hr />
          <Switch>
            <Route exact path="/step-form" component={UserForm} />
            <Route path="/pure-react" component={SimpleReactValidation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
