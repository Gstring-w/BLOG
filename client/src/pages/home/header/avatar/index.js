import React from "react";
import { Avatar, Badge, Dropdown } from "antd";
import AvaterMenu from "../../../../components/avaterMenu";
import "./index.scss";
export default function _Avater(props) {
  return (
    <div className="avater-wrapper">
      <Dropdown overlay={AvaterMenu} trigger={["click"]}>
        <Badge count={5}>
          <Avatar icon="user" shape="square" src={props.src} />
        </Badge>
      </Dropdown>
    </div>
  );
}
