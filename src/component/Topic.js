import React, { Component } from "react";
import axios from "axios";
import "../css/topic.css";
import Comment from "./comment";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicID: this.props.match.params.id,
      dataTopic: [],
      dataComment: [],
    };
    this.getOneTopic = this.getOneTopic.bind(this);
  }
  getOneTopic() {
    let id = this.props.match.params.id;
    console.log(id);
    axios
      .get("https://forum-master.herokuapp.com/api/topic/" + id)
      .then((value) => {
        if (value.data.status === true) {
          this.setState({
            dataTopic: value.data.dataTopic,
            dataComment: value.data.dataComment,
          });
        }
      });
  }
  componentDidMount() {
    this.getOneTopic();
  }
  render() {
    //return <div>"hh</div>;
    let { dataTopic, dataComment, topicID } = this.state;
    if (localStorage.getItem("token")) {
      return (
        <div className="boxTopic">
          <div className="infoTopic">
            <div className="imgUser">
              <img
                src="http://27.0.14.78/services/ninja/image/dame10x.gif"
                alt="X.png"
              ></img>
            </div>
            {dataTopic.map((item, index) => {
              return (
                <div key={index} className="chutop">
                  <div className="usercreated">{item.authour}</div>
                  <div className="title">{item.title}</div>
                  <div className="body">{item.body}</div>
                </div>
              );
            })}
          </div>
          <div className="boxComments">
            {dataComment.map((item, index) => {
              return (
                <div key={index} className="boxComment">
                  <div className="imgUser">
                    <img
                      src="http://27.0.14.78/services/ninja/image/Thebufftrau.gif"
                      alt="X.png"
                    ></img>
                  </div>
                  <div className="UserComment">
                    <div className="useridcmt">{item.byusername}</div>
                    <div className="bodycmt">{item.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <Comment topicID={topicID}></Comment>
        </div>
      );
    } else {
      return (
        <div className="boxTopic">
          <div className="infoTopic">
            <div className="imgUser">
              <img
                src="http://27.0.14.78/services/ninja/image/dame10x.gif"
                alt="X.png"
              ></img>
            </div>
            {dataTopic.map((item, index) => {
              return (
                <div key={index} className="chutop">
                  <div className="usercreated">{item.authour}</div>
                  <div className="title">{item.title}</div>
                  <div className="body">{item.body}</div>
                </div>
              );
            })}
          </div>
          <div className="boxComments">
            {dataComment.map((item, index) => {
              return (
                <div key={index} className="boxComment">
                  <div className="imgUser">
                    <img
                      src="http://27.0.14.78/services/ninja/image/Thebufftrau.gif"
                      alt="X.png"
                    ></img>
                  </div>
                  <div className="UserComment">
                    <div className="useridcmt">{item.byusername}</div>
                    <div className="bodycmt">{item.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
export default Topic;
