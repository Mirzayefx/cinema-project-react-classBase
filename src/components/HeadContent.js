import React, { Component } from "react";

export class HeadContent extends Component {
  render() {
    return (
      <div className="head_content">
        <h1>THE LOST CITY</h1>
        <h3>Action-Adventure <span style={{margin: "0 5px"}}>|</span> Comedy <span style={{margin: "0 5px"}}>|</span> Action</h3>
        <p>
          Alan, who is secretly enamored with Loretta, witnesses her kidnapping.
          He recruits Jack Trainer, a former Navy SEAL turned CIA operative, to
          meet him on the island and coordinate a rescueattempt.Jack, with no
          assistance from Alan.
        </p>
        <div className="content_col">
          <i className="far fa-clock"><span>164 min.</span></i>
          <i className="fas fa-closed-captioning"><span>Subtitles</span></i>
          <span>
            <b>● Imdb:</b> 9.1/10
          </span>
        </div>
        <div className="content_btns">
          <button className="ent_reg_btn content_btn">
            <i className="fas fa-play"></i> Watch now
          </button>
          <button className="ent_login_btn content_btn">
            <i className="fas fa-plus"></i> Add List
          </button>
        </div>
      </div>
    );
  }
}

export default HeadContent;
