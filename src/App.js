import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let _user = JSON.parse(JSON.stringify(user));
        console.log("logged in user");
        console.log(_user, props);
        localStorage.setItem("user", JSON.stringify(_user));
        this.props.history.push(`/dashboard`);
      } else {
        console.log("null value of user ");
        localStorage.setItem("user", null);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={props => <Registration {...props}></Registration>}
          ></Route>
          <Route
            path="/login"
            render={props => <Login {...props}></Login>}
          ></Route>
          <Route
            path="/dashboard"
            render={props => <Dashboard {...props}></Dashboard>}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
