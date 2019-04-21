import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import NotFound from "../pages/404";
import "../status/normaliza.scss";
export default class _Router extends Component {
  render() {
    return (
      <>
        <NotFound />
      </>
    );
  }
}
