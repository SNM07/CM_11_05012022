import React, { Component } from "react";
import { Link } from "react-router-dom";


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
    fetch(".././logements.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }



  render() {
    const { data } = this.state;

    return (
      <div className="cardContainer">
        {data.map((card) => (
            <Link key={`flat-${card.id}`} to= {`/flat/${card.id}`}>
          <SingleCard cover={card.cover} id={card.id} title={card.title} /></Link>
        ))}
      </div>
    );
  }
}

export default FlatCards;