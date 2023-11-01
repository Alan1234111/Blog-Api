import {StyledPostsContainer} from "./HomeStyles/SectionPostsContainer.styled";
import {StyledTag} from "../styles/Tag.styled";
import PropTypes from "prop-types";

export default function SectionPostContainer(props) {
  SectionPostContainer.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  };

  return (
    <StyledPostsContainer>
      <img src={props.photoUrl} alt="" />
      <div className="post-information">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <StyledTag>{props.tag}</StyledTag>
      </div>
    </StyledPostsContainer>
  );
}
