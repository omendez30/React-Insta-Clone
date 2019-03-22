import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
let count = 0;
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: "",
      count: count
    };
  }
  componentDidMount() {
    const id = this.props.postId;
    // alert("Got Item!");
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
      username: "ljhig",
      text: this.state.comment
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, text: "" });

    setTimeout(() => {
      this.setComments();
    }, 500);
  };
  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  addLike = event => {
    if (!this.state.thisUserClicked) {
      count += 1;
      this.setState(prevState => ({ count: count, thisUserClicked: true }));
    } else {
      count -= 1;
      this.setState(prevState => ({ count: count, thisUserClicked: false }));
    }
  };
  compoenentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }
  //changes the state of comments, updating when new comments are entered
  render() {
    return (
      <div>
        <i className="far fa-heart fa-2x" onClick={this.addLike} />
        <span>{this.state.count}</span>
        <i className="far fa-comment fa-2x" />
        {this.state.comments.map((c, i) => (
          <strong>
            <Comment key={i} comment={c} />
          </strong>
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
