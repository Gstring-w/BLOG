import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/404";
import "../status/normaliza.scss";
export default class _Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
