import styles from "./Button.module.scss";

export default function Button({ id, active, setActive, children }) {
  return (
    <button
      onClick={() => setActive(id)}
      className={`${styles.button} ${active === id ? styles.button_active : ""}`}
    >
      {children}
    </button>
  );
}
