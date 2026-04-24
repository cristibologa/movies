import Menu from "../components/Menu";
import Header from "../components/Header";
import styles from "./Home.module.scss";
import Button from "../components/Button";

export default function Home({ active, setActive }) {
  return (
    <>
      <Menu />
      <Header
        title="MaileHereko"
        text="List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion."
      />
      <div className={styles.button__block}>
        <Button id={1} active={active} setActive={setActive}>
          All
        </Button>
        <Button id={2} active={active} setActive={setActive}>
          Movies
        </Button>
        <Button id={3} active={active} setActive={setActive}>
          TV Shows
        </Button>
      </div>
    </>
  );
}
