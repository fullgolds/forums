import axios from "axios";
import React, { Component } from "react";
import "../css/login.css";
import { Switch } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      isLogin: false,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    let username = this.state.username;
    let password = this.state.pass;
    let payload = {
      username: username,
      password: password,
    };
    axios
      .post("https://forum-master.herokuapp.com/api/user/login", payload)
      .then((value) => {
        if (value.data.status === true) {
          localStorage.setItem("token", value.data.token);
          this.setState({ isLogin: true });
        } else {
          this.setState({ message: value.data.message });
        }
      });
  }
  onChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    let { username, password, isLogin } = this.state;
    <Switch>{isLogin ? (window.location = "/") : <Login></Login>}</Switch>;

    // if (isLogin) {
    //   return <Redirect to="/" />;
    // } else {
    return (
      <div className="Login">
        <div className="inputinfo">
          <span>Tài Khoản:</span>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeInput}
          ></input>
        </div>
        <div className="inputinfo">
          <span>Mật Khẩu:</span>
          <input
            type="text"
            name="pass"
            value={this.state.pass}
            onChange={this.onChangeInput}
          ></input>
        </div>
        <button onClick={this.onLogin}>Đăng Nhập</button>
        <div className="message">{this.state.message}</div>
      </div>
    );
  }
  //}
}
export default Login;
