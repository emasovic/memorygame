import React, { Component } from "react";
import { Link } from "react-router-dom";

import miVoice from "../voice/mi.mp3";
import miGif from "../SVG_slike/mi.gif";

import "./Victory.scss";

export default class Victory extends Component {
  render() {
    return (
      <div className="Victory">
        <div className="message">
          <img src={miGif} width="400px" height="600px" alt="" />
          <audio src={miVoice} autoPlay />
        </div>
        <div style={{ backgroundColor: "black" }}>
          <p>
            <Link to="/" style={{ color: "white" }}>
              Play again
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
