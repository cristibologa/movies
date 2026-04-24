import { useEffect, useState } from "react";
import Grid from "./components/Grid.jsx";
import Home from "./Page/Home.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  const handleActiveButton = (id) => setActiveButton(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
      );
      const result = await response.json();
      setData(result.results);
    };

    fetchData();
  }, []);

  console.log(data);
  let filtredData = data;

  if (activeButton === 2) {
    filtredData = data.filter((item) => item.media_type === "movie");
  }

  if (activeButton === 3) {
    filtredData = data.filter((item) => item.media_type === "tv");
  }

  console.log(filtredData);

  return (
    <div className="container">
      <Home active={activeButton} setActive={handleActiveButton} />
      <Grid data={filtredData} />
    </div>
  );
}

export default App;
