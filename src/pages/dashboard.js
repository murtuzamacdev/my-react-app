import React, { Component, PropTypes } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
  }

  logout = () =>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      
  }

  render() {
    return (
      <div>
        <div>THis is dashboard</div>
        <a onClick={this.logout} className="links" style={{color: 'blue'}}>Log out</a>
      </div>
    );
  }
}
export default Dashboard;
