import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoSVG from "./LogoSvg";

import "./Header.scss";

const CLASS = "mg-Header";

export default class Header extends Component {
  render() {
    return (
      <div className={CLASS}>
        <h1>
          <Link to="/memorygame">
            <LogoSVG />
          </Link>
        </h1>
      </div>
    );
  }
}
