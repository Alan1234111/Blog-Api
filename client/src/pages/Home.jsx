import { useEffect } from "react";
import { useState } from "react";
import MainPosts from "../components/Home/MainPosts";
import SectionPosts from "../components/Home/SectionPosts";
import TagsSection from "../components/Home/TagsSection";

export default function Home() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    async function fetchPostData() {
      try {
        const response = await fetch("http://localhost:5001/post");
        const result = await response.json();
        setPostData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPostData();

    return () => {
      // Cleanup logic, if needed
    };
  }, []);

  return (
    <>
      {postData && postData.posts ? (
        <>
          <MainPosts postData={postData} />
          <TagsSection />
          <SectionPosts postData={postData} />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
