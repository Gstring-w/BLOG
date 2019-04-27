import React, { Component } from "react";
import { List } from "antd";
import IconText from "../iconText";

import "./index.scss";
export default class index extends Component {
  state = {
    data: [
      {
        href: "",
        title: "",
        content: "",
        tags: [],
        star: 10,
        like: 10,
        message: 2
      }
    ]
  };
  render() {
    let { data } = this.state;
    return (
      <div className="content-wrapper">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" />,
                <IconText type="like-o" text="156" />,
                <IconText type="message" text="2" />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
