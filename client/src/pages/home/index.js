import React, { Component } from "react";
import { Affix, BackTop } from "antd";
import HeaderBar from "./header";
import RightContent from "./rightContent";
import Router from "../../routes";
import "./index.scss";
export default class Home extends Component {
  componentDidMount() {
    this.dom.style.animationName = "fadeInRight";
    this.dom.style.animationDuration = 1 + "s";
  }

  render() {
    return (
      <div>
        <Affix>
          <header className="home-header">
            <HeaderBar handleClick={this.handleClick} />
          </header>
        </Affix>
        <article className="home-article">
          <section className="home-article-content">
            <Router />
          </section>
          <section
            className="home-article-right"
            ref={dom => {
              this.dom = dom;
            }}
          >
            <RightContent />
          </section>
        </article>
        <BackTop />
      </div>
    );
  }
}
