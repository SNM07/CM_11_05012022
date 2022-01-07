import React, { Component } from "react";

class Tags extends Component {
  render() {
    return <span className="tags">{this.props.name}</span>;
  }
}

export default Tags;
