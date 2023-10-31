import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/MainPosts";
import SectionPosts from "./components/SectionPosts";
import TagSection from "./components/TagsSection";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

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

  return <RouterProvider router={router} />;

  // return (
  //   <div>
  //     <GlobalStyles />
  //     <Header />
  //     <Main />
  //     <TagSection />
  //     <hr></hr>
  //     <SectionPosts />
  //   </div>
  // );
}
