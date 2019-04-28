import React from "react";
import { Tag } from "antd";
import "./index.scss";

function OneImage(props) {
  return (
    <div className="listItem-wrapper-content">
      <p>{props.data.content}</p>
      <img src={props.data.imgs[0]} alt="" />
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
        {props.data.imgs.map(item => (
          <div key={item}>
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
      {hashImg[0](props)}
      {hashImg[1](props)}
      {hashImg[3](props)}
      <div className="listItem-wrapper-tags">
        <Tag>Tags：</Tag>
        {props.data.isHot ? <Tag color="magenta">热门</Tag> : ""}
        {props.data.tags.map(item => (
          <Tag color="green" key={item}>
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
}
