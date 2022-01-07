import React, { Component } from "react";

class Host extends Component {
  render() {
    return (
      <div className="host">
        <div className="hostName">{this.props.name}</div>
        <img src={this.props.avatar} alt="hostPic" className="hostPic" />
      </div>
    );
  }
}

export default Host;
