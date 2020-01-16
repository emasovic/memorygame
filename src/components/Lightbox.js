import React, { Component } from "react";

import "./Lightbox.scss";

export default class Lightbox extends Component {
  render() {
    return (
      <div className="lightbox">
        <div className="container">{this.props.children}</div>
        {/* <div className='overlay' /> */}
      </div>
    );
  }
}
