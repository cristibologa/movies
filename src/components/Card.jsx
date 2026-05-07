import styles from "./Card.module.scss";
import star from "../assets/star.svg";
import MovieDetails from "../Page/MovieDetails";

import { useNavigate } from "react-router";

export default function Card({ data }) {
  const { name, vote_average, title, poster_path } = data;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const nameOf = (name || title || "").split(" ").join("_");

  let navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/details/${name}`);
  };

  return (
    <div
      className={styles.wraper}
      onClick={() => {
        handleClick(nameOf);
      }}
    >
      <div className={styles.poster}>
        <img src={image} alt="img" width={266} height={400} />
        <div className={styles.rating}>
          <img src={star} alt="" />
          {Number(vote_average.toFixed(1))}
        </div>
      </div>
      <p className={styles.text}>{name || title}</p>
    </div>
  );
}
