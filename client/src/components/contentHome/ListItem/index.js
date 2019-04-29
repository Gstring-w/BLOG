import React from "react";
import { Tag, Divider } from "antd";
import "./index.scss";

function OneImage(props) {
  return (
    <div className="listItem-wrapper-content-one">
      <p className="article">{props.data.content}</p>
      <div className="article-img-wrapper">
        <img src={props.data.imgs[0]} alt="" />
      </div>
    </div>
  );
}

function NoImage(props) {
  return (
    <div className="listItem-wrapper-content">
      <p>{props.data.content}</p>
    </div>
  );
}

function ThreeImage(props) {
  return (
    <div className="listItem-wrapper-content">
      <p>{props.data.content}</p>
      <div className="listItem-image-wrapper">
        {props.data.imgs.map((item, index) => (
          <div key={index} className="img-wrap">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
let hashImg = {
  0: NoImage,
  1: OneImage,
  3: ThreeImage
};

export default function ListItem(props) {
  return (
    <div className="listItem-wrapper">
      <a href={props.data.href}>
        <div className="listItem-wrapper-title">{props.data.title}</div>
      </a>
      {hashImg[props.data.imgs.length](props)}
      <div className="listItem-wrapper-tags">
        <Tag>Tags：</Tag>
        {props.data.isHot ? <Tag color="magenta">热门</Tag> : ""}
        {props.data.tags.map((item, index) => (
          <Tag color="green" key={index}>
            {item}
          </Tag>
        ))}
      </div>
      <Divider />
    </div>
  );
}
