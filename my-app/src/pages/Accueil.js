import React, { Component } from "react";
import FlatCards from "../component/FlatCards";
import imageHome from ".././Images/imageHome.png"

class Accueil extends Component {
    render() {
        return (
            <div id="homePage">
                <div id="homePageBanner">
                    <div id="screen"></div>
                <img src={imageHome} alt="home" id="imageHome" />
                <span id="textHome">Chez vous, partout et ailleurs</span>
                </div>
            <div id="cardGridContainer">
                <FlatCards />
                </div>
                </div>
        )
    }
}

export default Accueil;