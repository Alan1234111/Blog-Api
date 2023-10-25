import { StyledMainPost } from "./styles/MainPost.styled";
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
        <h3>{props.content}</h3>
      </div>
      <div className="post-display">
        <h4>{props.tag}</h4>
        <img src={props.photoUrl} alt="" />
      </div>
    </StyledMainPost>
  );
}
