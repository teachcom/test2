import React, { Component } from "react";
import "../App.css";
import "./css/cover1.css";
import cover1 from "./images/cover01.jpg";
import cover2 from "./images/cover02.jpg";

export default class Cover extends Component {


  render() {
    const obj = this.props.display_data;
    var background;
    /*
    var topic1 = "หัวข้อ 1 ไม่เกิน 30 ตัว(ไม่ใส่ก็ได้)";
    var topic2 = "หัวข้อ 2 ไม่เกิน 30 ตัว";
    var topic3 = "หัวข้อ 3 ไม่เกิน 30 ตัว";
    var subTopic = "คำอธิบาย ไม่เกิน 30 ตัว";
    var name = "ชื่อ - สกุล";
    var title = "ตำแหน่ง";
    var dept = "กลุ่มสาระฯ";
    var school = "โรงเรียน";
    var sso1 = "สังกัด 1";
    var sso2 = "สังกัด 2";
    var sso3 = "สังกัด 3";*/

    var topic_type1 = "app_header_2_1";
    var topic_type2 = "app_header_2_2";
    var topic1_size = "2.8vh";
    var topic2_size = "3.4vh";
    var sub_type = "app_sub_1_1";

    var v4 = "inline-block";
    var v5 = "inline-block";

    
        var cover_id = obj.color11;
        var logo = obj.logo11.replace("open?", "uc?export=view&");
        var im1 = obj.pic11.replace("open?", "uc?export=view&");
        var im2 = obj.pic12.replace("open?", "uc?export=view&");
        var im3 = obj.pic13.replace("open?", "uc?export=view&");
        var im4 = obj.pic14.replace("open?", "uc?export=view&");
        var im5 = obj.pic15.replace("open?", "uc?export=view&");
        var topic1 = obj.topic11;
        var topic2 = obj.topic12;
        var subTopic = obj.subTopic11;
        var name = obj.name11;
        var title = obj.title11;
        var dept = obj.dept11;
        var school = obj.school11;
        var sso1 = obj.sso11;
        var sso2 = obj.sso12;
        var  sso3 = obj.sso13;
      
    if (cover_id === "1") {
        background = cover1;
    }
    if (cover_id === "2") {
        background = cover2;
    }
    if (im4 === null || im4 === "") {
      im4 = im1;
      v4 = "none";
      im5 = im1;
      v5 = "none";
    }
    if (im5 === null || im5 === "") {
      im5 = im1;
      v5 = "none";
      im4 = im1;
      v4 = "none";
    }
    if (topic1.length > 40) {
      topic1_size = "2.5vh";
    }
    if (topic1.length > 45) {
      topic1_size = "2.3vh";
    }
    if (topic1.length > 50) {
      topic1_size = "2.2vh";
    }
    if (topic2.length > 36) {
      topic_type1 = "app_header_3_1";
      topic_type2 = "app_header_3_2";
    }
    if (subTopic.length > 50) {
      var sub_type = "app_sub_2_1";
    }
    if (topic2.length > 34) {
      topic2_size = "3vh";
    }
    return (
      <div className="page" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} className="App_logo" alt="logo" style={{}} />
        <div className="app_header">
          <p className={topic_type1} style={{ fontSize: topic1_size }}>
            {topic1}
          </p>
          <p className={topic_type2} style={{ fontSize: topic2_size }}>
            {topic2}
          </p>
          <p className={sub_type}>{subTopic}</p>
        </div>
        <img className="App_profile" alt="ภาพบุคคล" src={im1} />
        <img className="app_story1" alt="ภาพกิจกรรม 1" src={im2} />
        <img className="app_story1_1" alt="ภาพกิจกรรม 2" src={im3} />
        <img
          className="app_story2"
          alt="ภาพกิจกรรม 3"
          src={im4}
          style={{ display: v4 }}
        />
        <img
          className="app_story2_2"
          alt="ภาพกิจกรรม 4"
          src={im5}
          style={{ display: v5 }}
        />
        <p className="app_a1">{name}</p>
        <p className="app_a2">{title}</p>
        <p className="app_a3">{dept}</p>
        <p className="app_a4">{school}</p>
        <p className="app_a5">{sso1}</p>
        <p className="app_a6">{sso2}</p>
        <p className="app_a7">{sso3}</p>
      </div>
    );
  }
}
