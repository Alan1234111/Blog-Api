import {useEffect, useState} from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
