import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ContentHome from "../components/contentHome";
import AboutContent from "../components/contentAbout";
export default class secondRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ContentHome} />
        <Route path="/about" exact component={AboutContent} />
        <Route path="/nav" exact component={AboutContent} />
      </Switch>
    );
  }
}
