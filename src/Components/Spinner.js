import React, { Component } from "react";
import load1 from "./load1.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load1} alt="" />
      </div>
    );
  }
}
