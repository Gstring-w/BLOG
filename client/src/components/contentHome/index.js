import React, { Component } from "react";
import ListItem from "./ListItem";
import { Spin } from "antd";
import * as axios from "../../axios";
import "./index.scss";
export default class index extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.animate();
    this.loadData();
    this.scrollLoad();
  }

  scrollLoad = () => {
    var root = document.getElementById("root");
    var lock = true;
    window.addEventListener(
      "scroll",
      e => {
        // console.log(window.pageYOffset, root.clientHeight);
        if (
          lock &&
          document.documentElement.clientHeight + window.pageYOffset >=
            root.clientHeight
        ) {
          console.log(1111);

          lock = false;
          axios.getBlogData().then(result => {
            if (result.status == 200) {
              this.setState(
                state => {
                  return { data: state.data.concat(result.data.data) };
                },
                () => {
                  lock = true;
                }
              );
            }
          });
        }
      },
      "false"
    );
  };

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
        <div className="loading_bar">
          <Spin />
        </div>
      </div>
    );
  }
}
