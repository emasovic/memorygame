import React, { Component } from "react";

import cybele from "../SVG_slike/cybele_logo.png";

export default class LogoSvg extends Component {
  render() {
    return (
      <div>
        <img src={cybele} width="100px" height="70px" />
      </div>
    );
  }
}
