import React, { Component } from "react";
import "../css/Topmenu.css";

class TopMenu extends Component {
  render() {
    if (localStorage.getItem("token")) {
      return (
        <div className="boxTop">
          <div className="logo">Forum</div>
          <div className="menu">
            <div className="inmenu">
              <a href="/">Diễn Đàn</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="boxTop">
          <div className="logo">Forum</div>
          <div className="menu">
            <div className="inmenu">
              <a href="/">Trang Chủ</a>
            </div>
            <div className="inmenu">
              <a href="/login">Đăng Nhập</a>
            </div>
            <div className="inmenu">
              <a href="/register">Đăng Ký</a>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default TopMenu;
