import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

const CLASS = "mg-Menu";

export default class Menu extends Component {
  render() {
    return (
      <div className={CLASS}>
        <div className={CLASS + "-wrapper"}>
          <div className={CLASS + "-wrapper-item"}>
            <Link to="/play">Play</Link>
          </div>
        </div>
      </div>
    );
  }
}
