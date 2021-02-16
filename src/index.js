import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./component/Homepage";
import Topic from "./component/Topic";
import TopMenu from "./component/TopMenu";
import Footer from "./component/footer";
import Login from "./component/Login";
import Register from "./component/Register";
import Info from "./component/info";
import DangBai from "./component/postTopic";
import Logout from "./component/logout";

ReactDOM.render(
  <Router>
    <TopMenu></TopMenu>
    <Info></Info>
    <Switch>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>
      <Route path="/topic/:id" component={Topic}></Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/register">
        <Register></Register>
      </Route>
      <Route exact path="/posttopic">
        <DangBai></DangBai>
      </Route>
      <Route exact path="/logout">
        <Logout></Logout>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
