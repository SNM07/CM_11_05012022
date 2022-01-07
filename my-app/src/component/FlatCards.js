import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServiceFlatCards from "../services/ServiceFlatCards";

import SingleCard from "./SingleCard";

class FlatCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    ServiceFlatCards(this);
  }

  render() {
    const { data } = this.state;

    return (
      <div className="cardContainer">
        {data.map((card) => (
          <Link
            key={`Fiche-Logement-${card.id}`}
            to={`/Fiche-Logement/${card.id}`}
          >
            <SingleCard cover={card.cover} id={card.id} title={card.title} />
          </Link>
        ))}
      </div>
    );
  }
}

export default FlatCards;
