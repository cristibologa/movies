import img from "../assets/Money_Heist.png";
import poster from "../assets/poster.png";

import styles from "./MovieDetails.module.scss";

export default function MovieDetails() {
  return (
    <>
      <div className={styles.poster}>
        <img src={poster} alt="" />
        <div className={styles.title}>
          <span>MaileHereko / Movies</span>
          <h3 className="h3">Avengers: Endgame</h3>
        </div>
      </div>

      <div>
        <div>image</div>
        <div>
          <p>description</p>
          <ul>
            <li>raiting</li>
            <li>type</li>
            <li>Movie</li>
            <li>release</li>
            <li>2013.0.1.</li>
            <li>Run time</li>
            <li>181 min</li>
            <li>Genres</li>
            <li>adventure</li>
          </ul>
        </div>
      </div>
    </>
  );
}
