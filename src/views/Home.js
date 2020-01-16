import React, { Component } from "react";

import Menu from "../components/Menu";

import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu />
      </div>
    );
  }
}
