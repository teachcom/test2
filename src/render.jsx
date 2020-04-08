import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";

import Select, { components } from "react-select";
import Rerender from "./rerender";
import chrome_ic from "./chome_ic.png";
import setting from "./setup_1.png";
import forms from "./forms.jpg";
import demo from './components/images/print_the_cover.gif'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from 'react-loader';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './fonts/Kanit-Regular.ttf'

import './fonts/Lato-Regular.ttf'

var selectedOption = "";
var title;
var options = [];
var ready = false;
var generator = 1;
var item = [];

export default class Render extends Component {
  state = {
    selectedOption: null,
    options: [],
    title,
    ready: true,
    item:[]
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption.value)
    );
  };

  handleChangeE(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSearch(event) {
    this.props.refresh();

    this.setState({
      ready: false});
    var a = [];
    options.map((obj) => {
      if (this.state.title === obj.label) {
        a.push(obj);
      } else {
      }
    });
    this.setState({ options: a, ready: true });
  }

  render() {
    const { data } = this.props.data;
    
    options = data.map((obj, index) => {
      var label = obj.email;
      return {
        label: label,
        value: obj,
        id: obj.Timestamp,
        cover: obj.type,
        key: index,
      };
    });
    if(this.state.ready) {
      return (
        <div>
          {this.state &&
            this.state.selectedOption &&
            this.state.selectedOption.value != null && (
              <Rerender
              selectedOption={this.state.selectedOption.value}
              ></Rerender>
            )}
          <div className="page">
            <br></br>
            <FontAwesomeIcon icon={faCoffee} />
            <h3>ทำตามขั้นตอนดังต่อไปนี้ให้ครบทุกขั้นตอนครับ</h3>
            <p>
              หมายเหตุ: รองรับการใช้งานด้วย{" "}
              <img

                src={chrome_ic}
                style={{ wiidth: "20px", height: "20px" }}
              ></img>
              บนคอมพิวเตอร์เท่านั้น
            </p>
            <br></br>
            <p>
              1. กรอกข้อมูลลง{" "}
              <a href="https://forms.gle/cJWPEg13sso8vPyC6" target="_blank">
                Google Forms&ensp;
                <img
                src={forms}
                style={{ wiidth: "20px", height: "20px", borderRadius:"50%"}}
              ></img>
              </a>
            </p>
            <p>2. เมื่อกรอกฟอร์มเสร็จแล้ว พิมพ์อีเมลตนเองลงในช่องด้านล่าง (ตัวอย่าง: anurak.k@phukhieo.ac.th) แล้วกด ค้นหาข้อมูล</p>
            <div style={{height:'55px'}}>
            <TextField
              id="outlined-secondary"
              label="กรอก Email"
              variant="outlined"
              color="secondary"
              value={this.state.title}
              onChange={this.handleChangeE.bind(this)}
              style={{height:'100%',width:'300px'}}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleChangeSearch.bind(this)}
              style={{height:'100%', marginLeft:'10px'}}
            >
              ค้นหาข้อมูล
            </Button>
            </div>
            <p>3. เลือกรายการด้านล่าง จากนั้นภาพหน้าปกจะแสดงด้านบน</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.options}
            />
  
            <p>
              4. บันทึกเป็นไฟล์ PDF หรือ สั่งพิมพ์ โดยการกด Ctrl+P หรือ ไปที่ เมนู
              > พิมพ์ แล้วทำตามการตั้งค่าดังรูปด้านล่าง
            </p>
            <img src={demo} style={{maxWidth: '100%'}} alt="loading..." />
          </div>
        </div>
      );
      }else{ 
        return(
        <Loader></Loader>
        );
      }
    
  }
}
