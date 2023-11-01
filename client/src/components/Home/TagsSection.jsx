import {StyledTagSection} from "./HomeStyles/TagSection.styled";
import {StyledTag} from "../styles/Tag.styled";

export default function TagsSection() {
  return (
    <StyledTagSection>
      <h2>FEATURED TAGS</h2>
      <div>
        <StyledTag $bg>#Travel</StyledTag>
        <StyledTag $bg>#Art</StyledTag>
        <StyledTag $bg>#Music</StyledTag>
        <StyledTag $bg>#History</StyledTag>
        <StyledTag $bg>#Biology</StyledTag>
      </div>
    </StyledTagSection>
  );
}
