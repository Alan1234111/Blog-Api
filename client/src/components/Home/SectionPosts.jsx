import SectionPostContainer from "./SectionPostContainer";

export default function SectionPosts(props) {
  console.log(props.postData.posts);
  return (
    <section>
      {props.postData.posts.slice(0, 6).map((post, i) => {
        return (
          <SectionPostContainer
            key={i}
            photoUrl={post.photoUrl}
            title={post.title}
            content={post.content}
            tag={post.tag}
          />
        );
      })}
    </section>
  );
}
