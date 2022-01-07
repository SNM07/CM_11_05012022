import React, { Component } from "react";

class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flatCard">
        <div className="imageContainer">
          <img src={this.props.cover} alt="" />

          <span className="flatCardTitle">{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default SingleCard;
