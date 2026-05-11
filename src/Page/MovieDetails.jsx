import { useParams } from "react-router";
import star from "../assets/star.svg";

import styles from "./MovieDetails.module.scss";

export default function MovieDetails({ data }) {
  const { id } = useParams();
  const selectedMovie = data?.find((movie) => movie.id === Number(id));
  if (!selectedMovie) {
    return <div className={styles.loading}>Loading movie details...</div>;
  }

  const {
    name,
    vote_average,
    title,
    poster_path,
    backdrop_path,
    overview,
    media_type,
    release_date,
    original_language,
  } = selectedMovie;

  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  // console.log(title);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.poster}>
          <img src={backdrop} alt="" />
        </div>
        <div className={styles.title}>
          <span>MaileHereko / Movies</span>
          <h3 className="h3">{name || title}</h3>
        </div>
      </div>

      <div className={styles.main}>
        <div className={`${styles.image}  `}>
          <img src={poster} width={480} alt="" />
        </div>

        <div className={styles.box}>
          <h4 className="h4">{name || title}</h4>
          <p className="p">{overview}</p>
          <div className={styles.rating}>
            <img src={star} alt="" />
            {Number(vote_average.toFixed(1))}
          </div>
          <ul className="list">
            <li>Type</li>
            <li>{media_type}</li>
            <li>Release</li>
            <li>{release_date}</li>
            <li>Original Language</li>
            <li>{original_language.toUpperCase()}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
