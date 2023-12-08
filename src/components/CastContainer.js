import React, { Component } from "react";
import Zoe from "../images/Zoe.png";
import Byron from "../images/Byron.png";
import Rita from "../images/Rita.png";
import Sarai from "../images/Sarah.png";
import Jaime from "../images/Jaime.png";
import CastContent from "./CastContent";

export class CastContainer extends Component {
  render() {
    return (
      <div className="cast_col">
        <h3 className="cast_topic">CAST</h3>
        <CastContent castPhoto={Zoe} />
        <CastContent castPhoto={Byron} />
        <CastContent castPhoto={Rita} />
        <CastContent castPhoto={Sarai} />
        <CastContent castPhoto={Jaime} />
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2119 4L13 4.53906L6.5 9L0 4.53906L0.784063 4L6.5 7.91927L12.2119 4Z"
            fill="white"
          />
          <path
            d="M12.2119 0L13 0.539062L6.5 5L0 0.539062L0.784063 0L6.5 3.91927L12.2119 0Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
}

export default CastContainer;
