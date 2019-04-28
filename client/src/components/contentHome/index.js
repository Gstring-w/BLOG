import React, { Component } from "react";
import ListItem from "./ListItem";
import "./index.scss";
export default class index extends Component {
  state = {
    data: [
      {
        href: "",
        title: "这是一个测试",
        content:
          "这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试",
        tags: ["javascript", "react"],
        star: 10,
        like: 10,
        message: 2,
        isHot: true,
        imgs: [
          "http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg",
          "http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg",
          "http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg"
        ]
      }
    ]
  };
  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.wrap.style.animationName = "fadeIn";
    this.wrap.style.animationDuration = 1 + "s";
  };
  render() {
    let { data } = this.state;
    return (
      <div
        className="content-wrapper"
        ref={wrap => {
          this.wrap = wrap;
        }}
      >
        <ListItem data={data[0]} />
      </div>
    );
  }
}
