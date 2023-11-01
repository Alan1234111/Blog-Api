import {StyledMainPost} from "./HomeStyles/MainPost.styled";
import {StyledTag} from "../styles/Tag.styled";
import PropTypes from "prop-types";

export default function MainPostContainer(props) {
  MainPostContainer.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  };

  return (
    <StyledMainPost className="post">
      <div className="post-info">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className="post-display">
        <StyledTag>{props.tag}</StyledTag>
        <img src={props.photoUrl} alt="" />
      </div>
    </StyledMainPost>
  );
}
