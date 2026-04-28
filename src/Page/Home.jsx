import Header from "../components/Header";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import Grid from "../components/Grid";
import { useFetchTrending } from "../hooks/useFetchTrending";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState(1);

  const handleActiveButton = (id) => setActiveButton(id);
  //movie tv all
  const { data, loading, error } = useFetchTrending("all");

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
    <>
      <Header
        title="MaileHereko"
        text="List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion."
      />
      <div className={styles.button__block}>
        <Button id={1} active={activeButton} setActive={handleActiveButton}>
          All
        </Button>
        <Button id={2} active={activeButton} setActive={handleActiveButton}>
          Movies
        </Button>
        <Button id={3} active={activeButton} setActive={handleActiveButton}>
          TV Shows
        </Button>
      </div>

      <Grid data={filtredData} />
    </>
  );
}
