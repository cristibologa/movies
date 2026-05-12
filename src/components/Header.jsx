import styles from "./Header.module.scss";
export default function Header({ title, text, textInput, handleChange }) {
  return (
    <div className={styles.header__wraper}>
      <h1 className="h1">{title}</h1>
      <p className={styles.text}>{text}</p>
      <input
        placeholder="Search Movies or TV Shows"
        className={styles.input}
        type="text"
        value={textInput}
        onChange={handleChange}
      />
    </div>
  );
}
