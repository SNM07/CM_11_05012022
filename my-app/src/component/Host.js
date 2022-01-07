import React, { Component } from "react";

class Host extends Component {
  render() {
    const endofname = this.props.name.indexOf(" ");
    const name = this.props.name.slice(0, endofname);
    const lastname = this.props.name.slice(endofname);
    return (
      <div className="host">
        <div className="hostName">{name} <br /> {lastname}</div>
        <img src={this.props.avatar} alt="hostPic" className="hostPic" />
      </div>
    );
  }
}

export default Host;
