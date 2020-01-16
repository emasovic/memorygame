import React, { Component } from "react";

import "./DoubleBounceSpinner.scss";

export default class DoubleBounceSpinner extends Component {
  render() {
    return (
      <div className="mg-DoubleBounceSpinner">
        <div className="bounce1" />
        <div className="bounce2" />
      </div>
    );
  }
}
