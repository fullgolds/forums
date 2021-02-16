import React, { Component } from "react";
import axios from "axios";
import "../css/info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Guest",
      role: "",
    };
    this.getInfo = this.getInfo.bind(this);
  }
  getInfo() {
    let token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .get("https://forum-master.herokuapp.com/api/user/info", {
        headers: {
          Authorization: token,
        },
      })
      .then((value) => {
        if (value.data.status === true) {
          this.setState({
            username: value.data.message[0].username,
            role: value.data.message[0].role,
          });
        }
      });
  }
  componentDidMount() {
    this.getInfo();
  }
  render() {
    if (localStorage.getItem("token")) {
      return (
        <div className="boxInfos">
          Xin chào:
          <span>
            {this.state.username} - {this.state.role}
          </span>{" "}
          - <a href="/posttopic">Đăng Bài Viết </a>-<a href="/logout"> Thoát</a>
        </div>
      );
    } else {
      return (
        <div className="boxInfos">
          Xin chào:Guest - <a href="/login">Login </a>
        </div>
      );
    }
  }
}
export default Info;
