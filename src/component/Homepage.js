import axios from "axios";
import "../css/homepage.css";
import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { dataTopic: [] };
    this.getTopic = this.getTopic.bind(this);
  }
  getTopic() {
    axios.get("http://localhost:8888/api/topic").then((value) => {
      if (value.data.status === true) {
        this.setState({ dataTopic: value.data.data });
      }
    });
  }
  componentDidMount() {
    this.getTopic();
  }
  render() {
    let dataTopic = this.state.dataTopic;
    if (dataTopic.length === 0) {
      return (
        <div className="container">
          <div className="body_body">Không có bài viết nào</div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="body_body">
            <div className="body">
              <div className="box_forums">
                {dataTopic.map((item, index) => {
                  let link = "/topic/" + item._id;
                  let timenow = new Date();
                  let timeCreated = new Date(item.dateCreated);
                  let timedis = timenow - timeCreated;
                  function tinh(diffTime) {
                    let date = Math.round(diffTime) + " phút";
                    if (diffTime > 60) {
                      date = Math.round(diffTime / 60) + " giờ";
                    }
                    if (diffTime / 60 > 24) {
                      date = Math.round(diffTime / 60 / 24) + " ngày";
                    }
                    if (diffTime / 60 / 24 > 7) {
                      date = Math.round(diffTime / 60 / 24 / 7) + " tuần";
                    }
                    return date;
                  }
                  return (
                    <div key={index} className="box_botss">
                      <div className="img">
                        <img src="http://forum.ngocrongonline.com/avatar/1209.png"></img>
                      </div>

                      <div className="box_name_eman">
                        <div className="titleTopic">
                          <a href={link}>{item.title}</a>
                        </div>
                        <div className="infosTopic">
                          đăng bởi : {item.authour} -
                          {` ${tinh(timedis / 60000)}`} trước
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default HomePage;
