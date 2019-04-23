import React, { Component } from "react";
import HeaderBar from "./header";
import RightContent from "./rightContent";
import SecendRoute from "../../routes/secondRoute";
import "./index.scss";
export default class Home extends Component {
  render() {
    return (
      <>
        <header className="home-header">
          <HeaderBar />
        </header>
        <article className="home-article">
          <section className="home-article-content">
            <SecendRoute />
          </section>
          <section className="home-article-right">
            <RightContent />
          </section>
        </article>
      </>
    );
  }
}
