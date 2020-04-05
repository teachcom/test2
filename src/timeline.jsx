import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import logo from "./logo.svg";
import profile from "./profile2.jpg"
var data = [];
var id = "";
export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  handleSort = (id, value) => (event) => {
    this.setState({ year: value, id: id });
  };

  componentDidMount() {
    Tabletop.init({
      key: "1F9eNlHl3QJIsnhzjCZhYkYUXeiLCpvmjzVkTgr4Uvm8",
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
    const { data } = this.state;
    var options = [];
    var prev = "";
    var mail = "akopadung@gmail.com";
    data.forEach((obj) => {
      if (prev == mail) {
        prev = mail;
      }
    });
    console.log(prev);
    console.log(data);
    return (
      <div className="page">
        <img src={logo} className="App_logo" alt="logo" style={{}} />
        <p className="App_header">
          รายงานปฏิบัติการรายงานปฏิบัติการรายงานปฏิบัติการรายงานปฏิบัติการรายงานปฏิบัติการรายงานปฏิบัติการ
        </p>
        <p className="app_head2">
          รายงานปฏิบัติการรายงานปฏิบัติการรายงานปฏิบัติการรายงานป
        </p>
        <img src={profile} className="App_profile" />
        <img src={profile} className="app_story1" />
        <img src={profile} className="app_story1_1" />
        <img src={profile} className="app_story2" />
        <img src={profile} className="app_story2_2" />
        <p className="app_a1">
          นายอนุรักษ์ โคผดุง
        </p>
        <p className="app_a2">
          ตำแหน่ง ครู วิทยะฐานนะ -
        </p>
        <p className="app_a3">
          กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี
        </p>
        <p className="app_a4">
          กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี
        </p>
        <p className="app_a5">
          กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี
        </p>
        <p className="app_a6">
          กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี
        </p>
        <p className="app_a7">
          กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี
        </p>
      </div>
    );
  }
}
