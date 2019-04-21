import React, { Component,createElement } from "react";
import pageAnout from "./pageAbout";
function asyncComponent(load) {
  return class AsyncComponent extends Component {
    state = {
      component: null
    };
    componentDidMount() {
      load().then(({ default: component }) => {
        console.log(pageAnout);
        this.setState({
          component
        });
      });
    }
    render() {
      let { component } = this.state;
      return component ? createElement(component) : null;
    }
  };
}

export default asyncComponent;
