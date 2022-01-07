import React, { Component } from "react";
import Accordion from "../component/Accordion";
import imageAbout from ".././Images/imageApropos.png";

class APropos extends Component {
  render() {
    return (
      <div id="aboutPage">
        <div id="aboutPageBanner">
          <div id="screenAbout"></div>
          <img src={imageAbout} alt="about" id="imageAbout" />
        </div>
        <div id="aboutContainer">
          <Accordion
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Accordion
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Accordion
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Accordion
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    );
  }
}

export default APropos;
