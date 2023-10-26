import { useEffect, useState } from "react";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Main from "./components/Main";
import SectionPosts from "./components/SectionPosts";
import TagSection from "./components/TagsSection";

export default function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5001/post")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.posts);
  //     });
  // }, []);

  // console.log(data[0].photoUrl);
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main />
      <TagSection />
      <hr></hr>
      <SectionPosts />
    </div>
  );
}
