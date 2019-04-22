import React, { Component } from "react";
import HeaderBar from "./header";
import Content from "./content";
import FooterPage from "./footer";
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
            <Content />
          </section>
          <section className="home-article-right">这是右边信息</section>
        </article>
        <footer className="home-footer">
          <FooterPage />
        </footer>
      </>
    );
  }
}
