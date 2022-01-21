import React, { Component } from "react";
import Accordion from "../component/Accordion";
import imageAbout from ".././Images/imageApropos.png";

const aboutAccordionItems = [
  {
    id: "about1",
    title: "Fiabilité",
    text:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "about2",
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. \n Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "about3",
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: "about4",
    title: "Sécurité",
    text:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. \n Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

class APropos extends Component {
  componentDidMount() {
    document.title = "À Propos";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="aboutPage">
        <div id="aboutPageBanner">
          <div id="screenAbout"></div>
          <img src={imageAbout} alt="about" id="imageAbout" />
        </div>
        <div id="aboutContainer">
          {aboutAccordionItems.map((item) => (
            <Accordion key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default APropos;
