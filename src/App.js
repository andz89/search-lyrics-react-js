import { useEffect, useState, useRef } from "react";
// import { lyrics } from "./components/lyrics";
import { queryItems } from "./components/query";
import Header from "./components/Header";
import List from "./components/List";

export default function App() {
  const [query, setQuery] = useState("");

  const [lyrics, setLyrics] = useState(null);

  const effectRan = useRef(false);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/lyrics")
        .then((res) => res.json())
        .then((data) => {
          setLyrics(data);
        })
        .catch((err) => console.log(err));
    };

    if (effectRan.current === false) {
      fetchData(); // Call the function to fetch data
      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  const results = queryItems(lyrics, query);

  return (
    <>
      <div className="my-2  ">
        <h2 className="text-center text-4xl font-bold text-orange-500">
          Search Lyrics
        </h2>
        <Header onChange={handleChange} />
        <div className="flex flex-wrap  justify-center  p-5 gap-5">
          {results && <List lyrics={results} />}
        </div>
      </div>
    </>
  );
}
