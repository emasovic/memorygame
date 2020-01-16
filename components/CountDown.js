import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CountDown extends Component {
  static propTypes = {
    timeInSeconds: PropTypes.number,
    onTimeExpired: PropTypes.func,
    stop: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      timeInSeconds: this.props.timeInSeconds || 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.props.stop) {
      clearInterval(this.interval);
      return;
    }

    this.setState({ timeInSeconds: this.state.timeInSeconds - 1 });
    if (this.state.timeInSeconds <= 0) {
      clearInterval(this.interval);
      this.props.onTimeExpired && this.props.onTimeExpired();
    }
  }

  formattedTime = () => {
    let minutes = Math.floor(this.state.timeInSeconds / 60);
    if (String(minutes).length < 2) minutes = `0${minutes}`;
    let seconds = this.state.timeInSeconds % 60;
    if (String(seconds).length < 2) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  render() {
    return <span className="count-down">{this.formattedTime()}</span>;
  }
}
