import logo from "../assets/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <header className={styles.header}>
      <a href="">
        <img src={logo} width={40} height={40} alt="logo" />
      </a>
      <nav>
        <ul className={styles.list}>
          <li className="item">
            <a href="#" className={styles.link}>
              Movies
            </a>
          </li>
          <li className="item">
            <a href="#" className={styles.link}>
              TV Shows
            </a>
          </li>
          <li className="item">
            <a href="#" className={styles.link}>
              Suggest me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
