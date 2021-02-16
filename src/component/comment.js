import React, { Component } from "react";
import axios from "axios";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "", isComment: false };
    this.onChange = this.onChange.bind(this);
    this.SendComment = this.SendComment.bind(this);
  }
  SendComment() {
    let data = {
      body: this.state.body,
      topicid: this.props.topicID,
    };
    let token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post("https://forum-master.herokuapp.com/api/comment", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((value) => {
        if (value.data.status === true) {
          this.setState({ isComment: true });
          console.log(this.state);
        }
      });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    {
      this.state.isComment ? (
        (window.location = `/topic/${this.props.topicID}`)
      ) : (
        <Comment></Comment>
      );
    }
    return (
      <div className="comment">
        <textarea
          width="99%"
          name="body"
          type="text"
          rows="3"
          value={this.state.body}
          onChange={this.onChange}
        ></textarea>
        <button onClick={this.SendComment}>Comment</button>
      </div>
    );
  }
}
export default Comment;
