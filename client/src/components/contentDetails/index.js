import React, { Component } from "react";

export default class ContentDetails extends Component {
  componentDidMount() {
    this.detailsWrap.style.animationName = "fadeIn";
    this.detailsWrap.style.animationDuration = 1 + "s";
  }
  render() {
    console.log(this.props);
    return (
      <div
        className="details"
        ref={detailsWrap => {
          this.detailsWrap = detailsWrap;
        }}
      >
        details
      </div>
    );
  }
}
