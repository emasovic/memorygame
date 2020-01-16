import React, { Component } from "react";

export default class GiftCard extends Component {
  render() {
    const obj = this.props.object.length ? this.props.object[0] : {};
    return (
      <div>
        <img src={obj.gif} width="400px" height="600px" alt="" />
        <audio src={obj.voice} autoPlay onEnded={this.props.displayGiftCard} />
      </div>
    );
  }
}
