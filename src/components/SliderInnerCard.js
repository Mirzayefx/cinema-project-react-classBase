import React, { Component } from "react";
import { img_path } from "../MAIN_API";
import NullImg from "../images/movie-poster.png"


export class SliderInnerCard extends Component {
  render() {
    const {poster} = this.props;
      return (
      <div className="slider_card">
        <img src={poster.poster_path==null? NullImg:  img_path+poster.poster_path} alt="" />
        <p>{poster.title}</p>
      </div>
    );
  }
}

export default SliderInnerCard;
