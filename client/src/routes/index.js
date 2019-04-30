import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../components/asyncComponent/asyncComponent";
import contentDetails from "../components/contentDetails";
import ContentHome from "../components/contentHome";
export default class secondRoute extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={ContentHome} />
        <Route
          path="/about"
          exact
          component={asyncComponent(() => import("../components/contentAbout"))}
        />

        <Route
          path="/nav"
          exact
          component={asyncComponent(() => import("../components/contentAbout"))}
        />

        <Route path="/details/:id" component={contentDetails} />
      </>
    );
  }
}
