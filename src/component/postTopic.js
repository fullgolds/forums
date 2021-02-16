import React, { Component } from "react";
import "../css/postTopic.css";
import axios from "axios";
class DangBai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      body: "",
      isPost: false,
      message: "",
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.postTopic = this.postTopic.bind(this);
  }
  postTopic() {
    let token = `Bearer ${localStorage.getItem("token")}`;
    console.log(token);
    let data = {
      title: this.state.title,
      body: this.state.body,
    };
    axios
      .post("http://localhost:8888/api/topic/post", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((value) => {
        if (value.data.status === true) {
          this.setState({ isPost: true, message: "Đăng Bài Thành công" });
        }
      });
  }
  onChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    if (this.state.isPost) {
      return <div className="PostTopic">Đăng Bài Thành Công</div>;
    }
    if (localStorage.getItem("token")) {
      return (
        <div className="PostTopic">
          <div className="titletopic">
            <span>Tiêu đề:</span>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="bodytopic">
            <span>Nội Dung:</span>
            <textarea
              width="99%"
              rows="4"
              name="body"
              value={this.state.body}
              onChange={this.onChangeInput}
            ></textarea>
          </div>
          <button onClick={this.postTopic}>Đăng Bài</button>
        </div>
      );
    } else {
      window.location = "/login";
    }
  }
}
export default DangBai;
