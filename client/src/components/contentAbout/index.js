import React from "react";
import { Timeline, Icon, Divider } from "antd";
import "./index.scss";
export default function ContentAbout() {
  return (
    <div className="about-wrapper">
      <Divider>关于博主：</Divider>
      <div className="about-info">
        <Icon type="github" />
      </div>
      <Divider>Timeline</Divider>
      <Timeline mode="left">
        <Timeline.Item>进入大学 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
}
