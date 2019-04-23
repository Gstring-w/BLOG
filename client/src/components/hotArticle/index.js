import React from "react";
import { List } from "antd";
import dealCharacter from "../../utils/dealCharacter";
import IconText from "../iconText";
import "./index.scss";

export default function HotArticle(props) {
  return (
    <div>
      <h4 style={{ marginBottom: -1, marginTop: 10, fontWeight: 600 }}>
        {props.title}:
      </h4>
      <List
        className="article-list"
        itemLayout="vertical"
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            actions={[
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />
            ]}
          >
            <List.Item.Meta
              title={<a href="#">{dealCharacter(item.title, 16)}</a>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
