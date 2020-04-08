import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";

import Select, { components } from "react-select";
import CoverA from "./components/cover1";
import CoverB from "./components/cover2";
import CoverC from "./components/cover3";

var selectedOption = "";

export default class Rerennder extends Component {
  render() {
    const data = this.props.selectedOption;
    if (data.type === "1") {
      return <CoverA display_data={data} style={{ fontFamily: "Lato" }}></CoverA>;
    } else if (data.type === "2") {
      return <CoverB display_data={data}></CoverB>;
    } else if (data.type === "3") {
      return <CoverC display_data={data}></CoverC>;
    } 
  }
}
