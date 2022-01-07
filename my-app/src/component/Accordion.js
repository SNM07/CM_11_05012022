import React, { Component } from "react";
import arrowDown from "../Images/arrowDown.svg";
import arrowUp from "../Images/arrowUp.svg";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const visible = this.state.visible;
    return (
      <div className="aboutContent">
        <h2 onClick={this.show}>
          {this.props.title}
          {!visible ? (
            <img onClick={this.show} src={arrowDown} alt="" />
          ) : (
            <img onClick={this.show} src={arrowUp} alt="" />
          )}
        </h2>
        <p className={this.state.visible ? "aboutText shownText" : "aboutText"}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Accordion;
