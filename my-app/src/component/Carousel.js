import React, { Component } from "react";
import rightArrow from "../Images/arrowRight.svg";
import leftArrow from "../Images/arrowLeft.svg";

class Carousel extends Component {
  state = {
    currentPicture: 0,
  };

  goToPreviousImage = () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === 0
          ? this.props.images.length - 1
          : prevState.currentPicture - 1,
    }));
  };

  goToNextImage = () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === this.props.images.length - 1
          ? 0
          : prevState.currentPicture + 1,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentPicture } = this.state;

    return (
      <div className="carousel">
        <img
          src={images && images[currentPicture]}
          className="flatPic"
          alt={"flatPic"}
        />

        {images && images.length > 1 && (
          <div className="leftArrow" onClick={() => this.goToPreviousImage()}>
            <img className="leftArrowIcon" src={leftArrow} alt="leftArrow" />
          </div>
        )}

        {images && images.length > 1 && (
          <div className="rightArrow" onClick={() => this.goToNextImage()}>
            <img className="rightArrowIcon" src={rightArrow} alt="rightArrow" />
          </div>
        )}
        <div className="picCounter">
          {currentPicture + 1}/{images && images.length}
        </div>
      </div>
    );
  }
}

export default Carousel;
