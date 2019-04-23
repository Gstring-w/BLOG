import React, { Component } from "react";
import { Icon, Drawer, Button, Avatar } from "antd";
import Logo from "../../pages/home/header/logo";
import "./index.scss";
export default class PhoneMenu extends Component {
  state = {
    collapsed: false,
    visible: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    let { status = false, user, avatar } = this.props;
    return (
      <div className="PhoneMenu">
        <Logo />
        <Drawer
          title="菜单选项"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="PhoneMenu-item">
            <Icon type="home" />
            主页
          </p>
          <p className="PhoneMenu-item">
            <Icon type="compass" />
            导航
          </p>
          <p className="PhoneMenu-item">
            <Icon type="user" />
            关于
          </p>
          <p className="PhoneMenu-item line">状态显示</p>
          {status ? (
            <p className="PhoneMenu-item">
              <Icon type="login" />
              登陆
            </p>
          ) : (
            <p className="PhoneMenu-item">
              <Avatar src={avatar} />
              {user}
            </p>
          )}

          <p className="PhoneMenu-item">
            <Icon type="logout" />
            登出
          </p>
        </Drawer>

        <Button onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
    );
  }
}
