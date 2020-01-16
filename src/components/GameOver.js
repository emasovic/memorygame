import React, { Component } from "react";
import { Link } from "react-router-dom";

import GameOverSVG from "./GameOverSvg";

import "./GameOver.scss";

const CLASS = "mg-GameOver";

export default class GameOver extends Component {
  render() {
    return (
      <div className={CLASS}>
        <div className="message">
          <GameOverSVG />
          <span>Game Over</span>
        </div>
        <p>
          <Link to="/memorygame">Try again</Link>
        </p>
      </div>
    );
  }
}
