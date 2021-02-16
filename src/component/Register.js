import React, { Component } from "react";
import axios from "axios";
import "../css/register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
      repass: "",
      message: "",
      isRegister: false,
    };
    this.Register = this.Register.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  Register() {
    let data = {
      username: this.state.username,
      password: this.state.pass,
    };
    axios
      .post("https://forum-master.herokuapp.com/api/user/register", data)
      .then((value) => {
        if (value.data.status === true) {
          this.setState({ isRegister: true, message: value.data.message });
        } else {
          this.setState({ message: value.data.message });
          console.log(this.state);
        }
      });
  }
  onChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  render() {
    let { username, pass, repass, isRegister, message } = this.state;
    if (isRegister === true) {
      return (
        <div className="boxRegister">
          <div className="inputinfo">
            <span>Tài Khoản:</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Mật Khẩu:</span>
            <input
              type="text"
              name="pass"
              value={pass}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Nhập Lại MK:</span>
            <input
              type="text"
              name="repass"
              value={repass}
              onChange={this.onChangeInput}
            ></input>
          </div>

          <button onClick={this.Register}>Đăng Ký</button>
          <div className="message">{message},đăng nhập ngay</div>
        </div>
      );
    } else {
      return (
        <div className="boxRegister">
          <div className="inputinfo">
            <span>Tài Khoản:</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Mật Khẩu:</span>
            <input
              type="text"
              name="pass"
              value={pass}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Nhập Lại MK:</span>
            <input
              type="text"
              name="repass"
              value={repass}
              onChange={this.onChangeInput}
            ></input>
          </div>

          <button onClick={this.Register}>Đăng Ký</button>
          <div className="message">{message}</div>
        </div>
      );
    }
    if (repass !== pass) {
      return (
        <div className="boxRegister">
          <div className="inputinfo">
            <span>Tài Khoản:</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Mật Khẩu:</span>
            <input
              type="text"
              name="pass"
              value={pass}
              onChange={this.onChangeInput}
            ></input>
          </div>
          <div className="inputinfo">
            <span>Nhập Lại MK:</span>
            <input
              type="text"
              name="repass"
              value={repass}
              onChange={this.onChangeInput}
            ></input>
          </div>

          <button onClick={this.Register}>Đăng Ký</button>
          <div className="error">Mật Khẩu Không Khớp</div>
        </div>
      );
    }
    return (
      <div className="boxRegister">
        <div className="inputinfo">
          <span>Tài Khoản:</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChangeInput}
          ></input>
        </div>
        <div className="inputinfo">
          <span>Mật Khẩu:</span>
          <input
            type="text"
            name="pass"
            value={pass}
            onChange={this.onChangeInput}
          ></input>
        </div>
        <div className="inputinfo">
          <span>Nhập Lại MK:</span>
          <input
            type="text"
            name="repass"
            value={repass}
            onChange={this.onChangeInput}
          ></input>
        </div>

        <button onClick={this.Register}>Đăng Ký</button>
      </div>
    );
  }
}
export default Register;
