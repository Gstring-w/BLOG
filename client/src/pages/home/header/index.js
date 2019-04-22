import React, { Component } from "react";
import HeaderMenu from "./menu";
import Logo from "./logo";
import Login from "./login";
import "./index.scss";
export default class HeaderBar extends Component {
  componentDidMount() {
    this.dom.style.transform = `translateY(0)`;
    this.checkWidth();
  }

  checkWidth = () => {
    let isPc = true;
    if (window.innerWidth < 530) {
      isPc = false;
    }
    this.setState({
      isPc
    });
  };

  state = {
    current: "home",
    isPc: true
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    let { current, isPc } = this.state;
    return (
      <div
        className="wrapper fade"
        ref={dom => {
          this.dom = dom;
        }}
      >
        <div className="headerBar">
          <div className="headerBar-logo">
            <Logo />
          </div>
          <div className="headerBar-nav">
            <HeaderMenu
              current={current}
              handleClick={this.handleClick}
              isPc={isPc}
            />
          </div>
          <div className="headerBar-login">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
