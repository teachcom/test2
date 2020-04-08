import React, { Component } from "react";
import "../App.css";
import "./css/cover3.css";
import cover1 from "./images/cover21.png";
import cover2 from "./images/cover21.png";
import top from "./images/cover21_top.png";

import mid from "./images/cover21_middle.png";

export default class Cover3 extends Component {
  render() {
    const obj = this.props.display_data;
    var cover;
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

    var topic_type1 = "app_header3_top1";
    var topic_type2 = "app_header3_sub1";
    var topic1_size = "2.8vh";
    var topic2_size = "3.4vh";
    var sub_type = "app_sub3_1";

    var v4 = "inline-block";

    var cover_id = obj.color31;
    var logo = obj.logo31.replace("open?", "uc?export=view&");
    var im1 = obj.pic31.replace("open?", "uc?export=view&");
    var im2 = obj.pic32.replace("open?", "uc?export=view&");
    var topic1 = obj.topic31;
    var topic2 = obj.topic32;
    var subTopic = obj.subTopic31;
    var name = obj.name31;
    var title = obj.title31;
    var dept = obj.dept31;
    var school = obj.school31;
    var sso1 = obj.sso31;
    var sso2 = obj.sso32;
    var sso3 = obj.sso33;

    if (cover_id === "1") {
      cover = cover1;
    }
    if (cover_id === "2") {
      cover = cover2;
    }
    if (topic1.length > 33) {
      topic1_size = "2.5vh";
    }
    if (topic1.length > 42) {
      topic1_size = "2.3vh";
    }
    if (topic1.length > 50) {
      topic1_size = "2vh";
    }
    if (topic2.length > 28) {
      topic2_size = "3vh";
    } 
    if (topic2.length > 40) {
      topic2_size = "2.5vh";
    }
    if (topic2.length > 36) {
      topic_type1 = "app_header3_top2";
      topic_type2 = "app_header3_sub2";
    }
    if (subTopic.length > 50) {
      var sub_type = "app_sub3_2";
    }


    return (
      <div className="page" style={{ backgroundImage: `url(${cover})` }}>
        <img className="app_profile3" alt="ภาพบุคคล" src={im1} />
        <img className="app_story32" alt="ภาพกิจกรรม 1" src={im2} />
        
        <img src={logo} className="app_logo3" alt="logo" style={{}} />

        <img className="app_header3_bg0" alt="ภาพบุคคล" src={top} />

        <div className="app_header3">
          <p className={topic_type1} style={{ fontSize: topic1_size }}>
            {topic1}
          </p>
          <p className={topic_type2} style={{ fontSize: topic2_size }}>
            {topic2}
          </p>
        </div>

        <p className={sub_type}>{subTopic}</p>

        <img className="app_middle3_bg" alt="ภาพบุคคล" src={mid} />
        <p className="app_a31">{name}</p>
        <p className="app_a32">{title}</p>
        <p className="app_a33">{dept}</p>

        <p className="app_a34">{school}</p>
        <p className="app_a35">{sso1}</p>
        <p className="app_a36">{sso2}</p>
        <p className="app_a37">{sso3}</p>
      </div>
    );
  }
}
