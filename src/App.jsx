import { useEffect, useState } from "react";
import Grid from "./components/Grid.jsx";
import Home from "./Page/Home.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [data, setData] = useState([]);
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
  return (
    <div className="container">
      <Home />
      <Grid data={data} />
    </div>
  );
}

export default App;
