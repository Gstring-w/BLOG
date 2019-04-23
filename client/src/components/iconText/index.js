import React from "react";
import { Icon } from "antd";
import "./index.scss";
export default function IconText(props) {
  return (
    <>
      <span className="icontext-wrapper">
        <Icon type={props.type} style={{ marginRight: 8 }} />
        {props.text}
      </span>
    </>
  );
}
