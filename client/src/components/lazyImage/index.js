import React, { Component } from "react";

export default class LazyImage extends Component {
  componentDidMount() {
    const { url, width, height } = this.props;
  }
  render() {
    return <div />;
  }
}
