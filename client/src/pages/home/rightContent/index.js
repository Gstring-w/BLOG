import React, { Component } from "react";
import Tags from "./tags";
import HotArticle from "../../../components/hotArticle";
import FooterPage from "../footer";
export default class RightContent extends Component {
  state = {
    tags: [
      "javascript",
      "webpack",
      "es6",
      "html5",
      "css3",
      "node.js",
      "git",
      "react",
      "react-router",
      "redux"
    ],
    data: [
      {
        title: "这是测试这是测试",
        content: "这是测试这是测试这是测试这是测试"
      },
      {
        title: "这是测试这是测试",
        content: "这是测试这是测试这是测试这是测试"
      },
      {
        title:
          "这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试",
        content: "这是测试这是测试这是测试这是测试"
      }
    ]
  };
  render() {
    const { tags, data } = this.state;
    return (
      <div className="animate">
        <div className="tags">
          <Tags tags={tags} />
        </div>
        <HotArticle data={data} title={"热门文章"} />
        <FooterPage />
      </div>
    );
  }
}
