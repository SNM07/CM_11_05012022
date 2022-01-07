import { Component } from "react";
import Star from "./Images/star.svg";
import StarEmpty from "./Images/starempty.svg";

class Rating extends Component {
  render() {
    const rating = [];

    for (let i = 0; i < 5; i++) {
      i < this.props.rating
        ? rating.push(<img src={Star} alt="star" className="star" />)
        : rating.push(
            <img src={StarEmpty} alt="starempty" className="starEmpty" />
          );
    }

    return (
      <div className="starsContainer">
        {rating.map((item, key) => (
          <span key={key}>{item}</span>
        ))}
      </div>
    );
  }
}

export default Rating;
