import React, { Component } from "react";
import Accordion from "../component/Accordion";
import Tags from "../component/Tags";
import Host from "../component/Host";
import Carousel from "../component/Carousel";
import Rating from "../component/Rating";
import ServiceFicheLogement from "../services/ServiceFicheLogement";

class FicheLogement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    ServiceFicheLogement(this);
  }

  render() {
    document.title = this.state.data.title;

    const { data } = this.state;
    const tagsData = this.state.data.tags;
    const hostData = this.state.data.host;
    const pictureData = this.state.data.pictures;
    const ratingData = this.state.data.rating;

    return (
      <div className="flatPage">
        <Carousel images={pictureData} />

        <div className="containerInfos">
          <div className="titleInfos">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <div className="tagsInfos">
              {tagsData &&
                tagsData.map((tag, i) => <Tags key={i} name={tag} />)}
            </div>
          </div>
          <div className="hostInfos">
            {hostData && (
              <Host name={hostData.name} avatar={hostData.picture} />
            )}
            <div className="starsRating">
              <Rating rating={ratingData && ratingData} />
            </div>
          </div>
        </div>
        <div className="containerDescription">
          <Accordion title="Description" text={data.description} />
          <Accordion
            title="Équipements"
            text={
              data.equipments &&
              data.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))
            }
          />
        </div>
      </div>
    );
  }
}

export default FicheLogement;
