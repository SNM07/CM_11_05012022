import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Erreur404 extends Component {
  render() {
    return (
      <div id="erreurContainer">
        <h1 id="titreErreur">404</h1>
        <span id="textErreur">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <NavLink
          exact
          to="/"
          className="nav"
          id="backHome"
          activeClassName="selected"
        >
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    );
  }
}

export default Erreur404;
