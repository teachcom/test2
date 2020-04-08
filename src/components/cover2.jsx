import React, { Component } from "react";
import "../App.css";
import "./css/cover2.css";
import cover1 from "./images/cover11.jpg";
import cover2 from "./images/cover02.jpg";
import top from "./images/cover11_top.png";

import mid from "./images/cover11_middle.png";

import bottomF from "./images/cover11_bottomF.png";
import bottomB from "./images/cover11_bottomB.png";


// Load Lato typeface
require('typeface-lato')
export default class Cover1 extends Component {
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

    var topic_type1 = "app_header2_2_1";
    var topic_type2 = "app_header2_2_2";
    var topic1_size = "2.8vh";
    var topic2_size = "3.4vh";
    var sub_type = "app_sub2_1_1";

    var v4 = "inline-block";

    var cover_id = obj.color21;
    var logo = obj.logo21.replace("open?", "uc?export=view&");
    var im1 = obj.pic21.replace("open?", "uc?export=view&");
    var im2 = obj.pic22.replace("open?", "uc?export=view&");
    var im3 = obj.pic23.replace("open?", "uc?export=view&");
    var im4 = obj.pic24.replace("open?", "uc?export=view&");
    var topic1 = obj.topic21;
    var topic2 = obj.topic22;
    var subTopic = obj.subTopic21;
    var name = obj.name21;
    var title = obj.title21;
    var dept = obj.dept21;
    var school = obj.school21;
    var sso1 = obj.sso21;
    var sso2 = obj.sso22;
    var sso3 = obj.sso23;

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
      topic_type1 = "app_header2_3_1";
      topic_type2 = "app_header2_3_2";
    }
    if (subTopic.length > 47) {
      var sub_type = "app_sub2_2_1";
    }
console.log(subTopic.length);
    if (im4 === null || im4 === "") {
      im4 = im1;
      v4 = "none";
    }

    return (
      <div className="page" style={{ backgroundImage: `url(${cover})` }}>
        <img className="App_profile2" alt="ภาพบุคคล" src={im1} />
        <img className="app_story21" alt="ภาพกิจกรรม 1" src={im2} />
        <img className="app_story22" alt="ภาพกิจกรรม 2" src={im3} />
        <img
          className="app_story23"
          alt="ภาพกิจกรรม 3"
          src={im4}
          style={{ display: v4 }}
        />

        <img className="app_header2_bg0" alt="bg3" src={bottomF} />
        <img className="app_header2_bg1" alt="bg1" src={top} />
        <img className="app_header2_bg2" alt="bg1" src={top} />
        <img className="app_middle_bg" alt="bg3" src={mid} />
        <img src={logo} className="App_logo2" alt="logo" style={{}} />
        <div className="app_header2">
          <p className={topic_type1} style={{ fontSize: topic1_size }}>
            {topic1}
          </p>
          <p className={topic_type2} style={{ fontSize: topic2_size }}>
            {topic2}
          </p>
          <p className={sub_type}>{subTopic}</p>
        </div>

        <p className="app_a21">{name}</p>
        <p className="app_a22">{title}</p>
        <p className="app_a23">{dept}</p>

        <img className="app_bottom_bg1" alt="bg3" src={bottomB} />
        <img className="app_bottom_bg2" alt="bg3" src={bottomF} />

        <p className="app_a24">{school}</p>
        <p className="app_a25">{sso1}</p>
        <p className="app_a26">{sso2}</p>
        <p className="app_a27">{sso3}</p>
      </div>
    );
  }
}
