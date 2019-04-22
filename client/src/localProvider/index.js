import { LocaleProvider } from "antd";
import React, { Component } from "react";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

export default class Provider extends Component {
  render() {
    return (
      <>
        <LocaleProvider locale={zh_CN}>{this.props.children}</LocaleProvider>
      </>
    );
  }
}
