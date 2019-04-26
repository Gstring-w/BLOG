import React from "react";
import { Avatar, Badge } from "antd";
export default function _Avater(props) {
  return (
    <div>
      <Badge dot>
        <Avatar icon="user" shape="square" src={props.src} />
      </Badge>
    </div>
  );
}
