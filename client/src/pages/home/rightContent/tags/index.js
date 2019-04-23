import React from "react";
import { Tag } from "antd";

import "./index.scss";
const hashColor = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple"
];
export default function Tags(props) {
  return (
    <div>
      <h4 style={{ marginBottom: 8, marginTop: 10, fontWeight: 600 }}>
        文章标签:
      </h4>
      <div className="tags-wrapper">
        {props.tags.map(item => {
          return (
            <Tag color={hashColor[Math.floor(Math.random() * 10)]} key={item}>
              {item}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
