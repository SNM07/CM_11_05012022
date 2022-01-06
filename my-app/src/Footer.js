import React, { Component } from "react";
import logoFooter from "./Images/LOGOFooter.png";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <img src={logoFooter} alt="logo" id="logoFooter" />
        <span id="textFooter">© 2020 Kasa. All rights reserved</span>
      </div>
    );
  }
}

export default Footer;
