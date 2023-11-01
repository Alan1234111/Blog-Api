import {StyledComment} from "./PostStyles/Comment.styled";
import PropTypes from "prop-types";

export default function Comment(props) {
  Comment.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
  };

  return (
    <StyledComment>
      <div className="comment-information">
        <p className="author">{props.author}</p>
        <p className="date">{props.date}</p>
      </div>
      <p className="content">{props.content}</p>
      <div className="action-section">
        <button>
          <img src="/like_unfilled.svg" alt="like" /> {props.like}
        </button>
        <button>
          <img src="/reply.svg" alt="" />
          Reply
        </button>
      </div>
      <hr></hr>
    </StyledComment>
  );
}
