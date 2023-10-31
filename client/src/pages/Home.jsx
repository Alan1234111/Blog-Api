import MainPosts from "../components/MainPosts";
import SectionPosts from "../components/SectionPosts";
import TagsSection from "../components/TagsSection";

export default function Home() {
  return (
    <>
      <MainPosts />
      <TagsSection />
      <SectionPosts />
    </>
  );
}
