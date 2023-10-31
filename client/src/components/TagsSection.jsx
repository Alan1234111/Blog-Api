import {StyledTagSection} from "./styles/TagSection.styled";
import {StyledTag} from "./styles/tag.styled";

export default function TagsSection() {
  return (
    <StyledTagSection>
      <h2>FEATURED TAGS</h2>
      <div>
        <StyledTag>#Travel</StyledTag>
        <StyledTag>#Art</StyledTag>
        <StyledTag>#Music</StyledTag>
        <StyledTag>#History</StyledTag>
        <StyledTag>#Biology</StyledTag>
      </div>
    </StyledTagSection>
  );
}
