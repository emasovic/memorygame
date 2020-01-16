import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Card.scss";

const CLASS = "mg-Card";

export default class Card extends Component {
  static propTypes = {
    index: PropTypes.number,
    image: PropTypes.string,
    background: PropTypes.string,
    label: PropTypes.string,
    revealed: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    revealed: false
  };

  clickHandler = e => {
    e.preventDefault();
    this.props.onClick &&
      this.props.onClick({
        index: this.props.index,
        label: this.props.label,
        revealed: !this.props.revealed
      });
  };

  render() {
    const className = this.props.revealed ? "" : "rotate";
    const hrefLink = "#";

    return (
      <div className={`${CLASS} ${className}`} onClick={this.clickHandler}>
        <a href={hrefLink}>
          <div
            className="card-icon"
            style={{
              backgroundColor: this.props.backgroundColor,
              backgroundImage: `url(${this.props.svg})`,
              backgroundSize: "150px 200px",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <h2>{this.props.label}</h2>
        </a>
      </div>
    );
  }
}
