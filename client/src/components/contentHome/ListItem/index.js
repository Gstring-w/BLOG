import React from "react";
import { Link } from "react-router-dom";
import { Tag, Divider, Avatar } from "antd";
import LazyImage from "../../lazyImage";
import IconText from "../../iconText";
import "./index.scss";

function OneImage(props) {
  return (
    <div className="listItem-wrapper-content-one">
      <p className="article">{props.data.content}</p>
      <div className="article-img-wrapper">
        <LazyImage url={props.data.imgs[0]} />
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
            <LazyImage url={item} />
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
    <div className="listItem-wrapper bounceInUp">
      <Link to="./details/111">
        <div className="listItem-wrapper-title">{props.data.title}</div>
      </Link>
      {hashImg[props.data.imgs.length](props)}
      <div className="hot-info">
        <IconText type="star-o" text="156" /> |
        <IconText type="like-o" text="156" /> |
        <IconText type="message" text="2" />
      </div>
      <div className="authorInfo">
        <Avatar
          size={20}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        @<span>2019.12.03</span>
      </div>
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
