import {StyledTag} from "../styles/Tag.styled";
import {StyledPostContent} from "./PostStyles/PostContent.styled";
import PropTypes from "prop-types";

export default function PostContent(props) {
  PostContent.propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  return (
    <StyledPostContent>
      <StyledTag className="tag">{props.tag}</StyledTag>
      <h2>{props.title}</h2>
      <div className="wrapper">
        <p className="date">{props.date}</p>
        <span>|</span>
        <p className="author">by {props.author}</p>
      </div>
      <img src={props.photoUrl} alt="" />
      <article>
        <p>{props.content}</p>
      </article>
    </StyledPostContent>
  );
}
