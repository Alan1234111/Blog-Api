import { StyledMain } from "./HomeStyles/Main.styled";
import MainPostContainer from "./MainPostContainer";

export default function Main(props) {
  return (
    <StyledMain>
      {props.postData.posts.slice(0, 6).map((post, i) => {
        return (
          <MainPostContainer
            key={i}
            title={post.title}
            content={post.content}
            tag={post.tag}
            photoUrl={post.photoUrl}
          />
        );
      })}
    </StyledMain>
  );
}
