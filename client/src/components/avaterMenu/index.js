import React from "react";
import { Menu, Badge } from "antd";

export default function AvaterMenu() {
  return (
    <Menu>
      <Menu.Item key="0">
        <Badge count={5}>user's message</Badge>
      </Menu.Item>
      <Menu.Item key="1">用户收藏</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">退出登陆</Menu.Item>
    </Menu>
  );
}
