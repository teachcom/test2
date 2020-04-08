import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import logo from "./logo.svg";
import Render from "./render";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select, { components } from 'react-select';

var data = [];
var id = "";

export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
    Tabletop.init({
      key: "1VYCcGr5Wr9pQ0cHRn-0YvPFGWbS0BasOugBF84MvlTM",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  };

  componentDidMount() {
    Tabletop.init({
      key: "1VYCcGr5Wr9pQ0cHRn-0YvPFGWbS0BasOugBF84MvlTM",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }
  render() {
    return (
      this.state &&
      this.state.data && (
        
          <Render data={this.state} refresh={this.handleClick}></Render>
        
      )
      
         
    );
  }

}
