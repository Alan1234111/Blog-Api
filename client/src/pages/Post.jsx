import {StyledSinglePost} from "../components/Post/PostStyles/Post.styled";
import {StyledTagsContainer} from "../components/Post/PostStyles/TagsContainer.styled";
import PostContent from "../components/Post/PostContent";
import Tag from "../components/Post/Tag";
import Comment from "../components/Post/Comment";

export default function Post() {
  return (
    <StyledSinglePost>
      <PostContent
        tag="TRAVEL"
        title="Paradise Reimagined: Experience Luxury at Puerto Vallartas Newest Resort"
        date="06.28.23"
        author="David Choi"
        photoUrl="https://images.unsplash.com/photo-1698779165405-33762b9906a7?auto=format&fit=crop&q=80&w=1615&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        content="Picture yourself in a tropical paradise, where azure waters meet pristine white sands, and the warm sun kisses your skin. Nestled in the heart of this idyllic destination is Puerto Vallarta's latest gem—the epitome of sustainable luxury: a visionary resort that combines breathtaking natural beauty with a commitment to environmental stewardship and world-class hospitality. In this blog post, we invite you to embark on a journey of discovery as we explore the exquisite features and
          sustainable ethos of Puerto Vallartas newest luxury resort."
      />

      <StyledTagsContainer>
        <hr></hr>
        <h3>Tags</h3>
        <div>
          <Tag tag="Travel" />
          <Tag tag="Travel" />
          <Tag tag="Travel" />
          <Tag tag="Travel" />
        </div>
      </StyledTagsContainer>

      <div className="comment-container">
        <h3>Comments</h3>
        <Comment author="Al an" date="August 16, 2023" content="Visiting next week! Cant wait to get there!" like={4} />
      </div>
    </StyledSinglePost>
  );
}
