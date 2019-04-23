import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
export default function PcMenu(props) {
  return (
    <div>
      <Menu
        onClick={props.handleClick}
        selectedKeys={[props.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            主页
          </Link>
        </Menu.Item>

        <Menu.Item key="compass">
          <Link to="/nav">
            <Icon type="compass" />
            导航
          </Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to="/about">
            <Icon type="user" />
            关于
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
