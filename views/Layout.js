import React, { Component } from "react";

import Header from "../components/Header";
// import Copyright from "../components/copyright";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <main>{this.props.children}</main>
        <footer>{/* <Copyright /> */}</footer>
      </div>
    );
  }
}
