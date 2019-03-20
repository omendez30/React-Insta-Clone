import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comment: JSON.parse(localStorage.getItem(this.props.postId))
      }); //might need to tweek
    } else {
      this.setComments();
    }
  }

  componentWillMount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentSubmitHandle = event => {
    event.preventDefault();
    const newComment = {
      username: "gsgfohis",
      text: this.state.comment
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };
  //changes the state of comments, updating when new comments are entered
  render() {
    return (
      <div>
        <i className="far fa-heart fa-2x" />
        <i className="far fa-comment fa-2x" />
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.commentSubmitHandle}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
