import React, { Component } from "react";
import Accordion from "../component/Accordion";
import Tags from "../component/Tags";
import Host from "../component/Host";
import Carousel from "../component/Carousel";
import Rating from "../component/Rating";
import { ServiceFicheLogement } from "../services/ServiceFicheLogement";

class FicheLogement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async initFicheLogement() {
    const data = await ServiceFicheLogement();
    const property = data.filter(
      (property) => property.id === this.props.match.params.id
    );
    if (property.length === 0) {
      this.props.history.push("/Erreur404");
    } else {
      this.setState({ data: property[0] });
    }
  }

  componentDidMount() {
    this.initFicheLogement();
    window.scrollTo(0, 0);
  }

  render() {
    const { data } = this.state;
    const { tags, host, pictures, rating } = data;
    document.title = data.title;

    return (
      <div className="flatPage">
        <Carousel images={pictures} />

        <div className="containerInfos">
          <div className="titleInfos">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <div className="tagsInfos">
              {tags && tags.map((tag, i) => <Tags key={i} name={tag} />)}
            </div>
          </div>
          <div className="hostInfos">
            {host && <Host name={host.name} avatar={host.picture} />}
            <div className="starsRating">
              <Rating rating={rating && rating} />
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
