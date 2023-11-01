import {StyledTag} from "../styles/Tag.styled";
import PropTypes from "prop-types";

export default function Tags(props) {
  Tags.propTypes = {
    tag: PropTypes.string.isRequired,
  };

  return <StyledTag>#{props.tag}</StyledTag>;
}
