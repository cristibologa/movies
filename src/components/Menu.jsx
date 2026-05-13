import { Link } from "react-router";
import logo from "../assets/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <header className={`${styles.header} container`}>
      <Link to="/">
        <img src={logo} width={40} height={40} alt="logo" />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li className="item">
            <Link to="movies" className={styles.link}>
              Movies
            </Link>
          </li>
          <li className="item">
            <Link to="tv" className={styles.link}>
              TV Shows
            </Link>
          </li>
          <li className="item">
            <Link to="watch" className={styles.link}>
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
