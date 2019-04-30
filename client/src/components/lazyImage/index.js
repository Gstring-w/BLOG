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
  }
  render() {
    return (
      <div
        className="LazyImage"
        ref={imageWrap => {
          this.imageWrap = imageWrap;
        }}
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
