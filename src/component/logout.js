import React, { Component } from "react";
import "../css/footer.css";

class Logout extends Component {
  removeToken() {
    localStorage.removeItem("token");
    window.location = "/";
  }
  render() {
    return this.removeToken();
  }
}
export default Logout;
