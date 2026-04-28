import { useState } from "react";
import Grid from "./components/Grid.jsx";
import Home from "./Page/HomePage.jsx";
import MovieDetails from "./Page/MovieDetails.jsx";
import { useFetchTrending } from "./hooks/useFetchTrending";

function App() {
  const [activeButton, setActiveButton] = useState(1);
  //movie tv all
  const { data, loading, error } = useFetchTrending("all");
  const handleActiveButton = (id) => setActiveButton(id);

  let filtredData = data;

  if (activeButton === 2) {
    filtredData = data.filter((item) => item.media_type === "movie");
  }

  if (activeButton === 3) {
    filtredData = data.filter((item) => item.media_type === "tv");
  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container">
      <Home
        active={activeButton}
        setActive={handleActiveButton}
        data={filtredData}
      />

      <MovieDetails />
    </div>
  );
}

export default App;
