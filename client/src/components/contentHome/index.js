import React, { Component } from "react";
import ListItem from "./ListItem";
import * as axios from "../../axios";
import "./index.scss";
export default class index extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.animate();
    this.loadData();
    window.addEventListener(
      "scroll",
      e => {
        console.log(window.pageYOffset, this.wrap.clientHeight, window.screen);
      },
      "false"
    );
  }

  loadData = () => {
    axios.getBlogData().then(data => {
      if (data.status == 200) {
        this.setState({
          data: data.data.data
        });
      }
    });
  };
  animate = () => {
    this.wrap.style.animationName = "fadeIn";
    this.wrap.style.animationDuration = 3 + "s";
  };
  render() {
    let { data } = this.state;
    return (
      <div
        className="content-wrapper"
        ref={wrap => {
          this.wrap = wrap;
        }}
        onScroll={e => {
          console.log(e, 11111);
        }}
      >
        {data.length !== 0 &&
          data.map((item, index) => {
            return <ListItem data={item} key={index} />;
          })}
        {data.length !== 0 &&
          data.map((item, index) => {
            return <ListItem data={item} key={index} />;
          })}
      </div>
    );
  }
}
