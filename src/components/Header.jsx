import styles from "./Header.module.scss";
export default function Header({ title, text, span }) {
  return (
    <div className={styles.header__wraper}>
      {span && <span>{span}</span>}
      <h1 className="h1">{title}</h1>
      <p className={styles.text}>{text}</p>
      <input
        placeholder="Search Movies or TV Shows"
        className={styles.input}
        type="text"
      />
    </div>
  );
}
