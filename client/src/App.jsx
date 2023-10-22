import {useEffect, useState} from "react";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

export default function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5001/post")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.posts);
  //     });
  // }, []);

  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}
