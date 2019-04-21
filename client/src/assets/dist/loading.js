import React, { Component } from "react";
import { render } from "react-dom";
class Loading extends Component {
  render() {
    return <div>这是一个loading组件</div>;
  }
}

render(<Loading />, window.document.getElementById("loading"));
