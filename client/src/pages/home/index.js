import React, { Component } from "react";
import { Affix, BackTop } from "antd";
import Sketlon from "../../components/SkeletonHome";
import HeaderBar from "./header";
import RightContent from "./rightContent";
import Router from "../../routes";
import "./index.scss";
export default class Home extends Component {
  render() {
    return (
      <>
        <Affix>
          <header className="home-header">
            <HeaderBar />
          </header>
        </Affix>
        <article className="home-article">
          <section className="home-article-content">
            <Router />
          </section>
          <section className="home-article-right">
            <RightContent />
          </section>
        </article>
        <BackTop />
      </>
    );
  }
}
