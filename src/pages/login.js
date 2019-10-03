import React, { Component, PropTypes } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    if (formValid(this.state)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          setTimeout(()=>{this.props.history.push(`/dashboard`)},2000);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ...
        });
    } else {
      alert("Invalid data");
    }

    // do some login logic here, and if successful:
    // console.log(this.props)
    // this.props.history.push(`/dashboard`);
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          {/* <form noValidate> */}
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
          </div>
          <div className="createAccount">
            <button onClick={this.handleLogin}>Login</button>
            <NavLink to="/">
              <small className="links">Sign Up?</small>
            </NavLink>
          </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}
export default Login;
