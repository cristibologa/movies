import styles from "./Card.module.scss";
import star from "../assets/star.svg";

export default function Card({ data }) {
  // console.log(data);
  const { id, name, vote_average, title, poster_path } = data;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className={styles.wraper}>
      <div className={styles.poster}>
        <img src={image} alt="img" width={266} height={400} />
        <div className={styles.rating}>
          <img src={star} alt="" />
          {vote_average}
        </div>
      </div>
      <p className={styles.text}>{name || title}</p>
    </div>
  );
}
