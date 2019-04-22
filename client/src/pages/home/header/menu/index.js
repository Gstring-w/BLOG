import React from "react";
import { Menu, Icon } from "antd";

export default function HeaderMenu(props) {
  return <>{props.isPc ? PcMenu() : <></>}</>;
}

function PcMenu() {
  return (
    <>
      <Menu
        onClick={props.handleClick}
        selectedKeys={[props.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />
          主页
        </Menu.Item>
        <Menu.Item key="compass">
          <Icon type="compass" />
          导航
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="user" />
          关于
        </Menu.Item>
      </Menu>
    </>
  );
}
