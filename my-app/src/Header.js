import React, { Component } from "react";
import logoHeader from "./Images/LOGO.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="header">
            <img src={logoHeader} alt="logo" id="logoHeader" />
            <div id="menu">
          <NavLink exact to="/" className="nav" activeClassName="selected">Accueil</NavLink>
                <NavLink exact to="/A-Propos" className="nav" activeClassName="selected">A Propos</NavLink>
                </div>
      </div>
    );
  }
}

export default Header;
