import React, { Component } from "react";
import { Icon } from "antd";
import "./index.scss";

export default class LazyImage extends Component {
  componentDidMount() {
    const { url } = this.props;
    var img = new Image();
    img.src = url;
    img.addEventListener(
      "load",
      () => {
        this.iconWrap.remove();
        this.imageWrap.append(img);
        this.imageWrap.style.background = "#fff";
      },
      false
    );
    this.show = false;
  }

  handleClick = () => {
    const { url } = this.props;
    var rootDom = document.createElement("div");
    // rootDom.class = "zoomIn";
    rootDom.style.width = "100%";
    rootDom.style.height = "100%";
    rootDom.style.position = "fixed";
    rootDom.style.top = "0px";
    rootDom.style.zIndex = "999";
    rootDom.style.left = "0px";
    rootDom.style.backgroundColor = "rgba(0,0,0,.5)";

    var img = new Image();
    img.src = url;
    img.style.width = "250px";
    img.style.height = "auto";
    img.style.position = "absolute";
    img.style.left = "50%";
    img.style.top = "40%";
    img.style.transform = "translate(-50%,-50%)";

    img.style.margin = "30px auto 0px";

    rootDom.onclick = () => {
      rootDom.remove();
    };
    rootDom.append(img);
    document.body.append(rootDom);
  };
  render() {
    return (
      <div
        className="LazyImage"
        ref={imageWrap => {
          this.imageWrap = imageWrap;
        }}
        onClick={this.handleClick}
      >
        <span
          ref={iconWrap => {
            this.iconWrap = iconWrap;
          }}
        >
          <Icon type="file-jpg" style={{ fontSize: "30px" }} />
        </span>
      </div>
    );
  }
}
