import img from "../assets/Money_Heist.png";
import poster from "../assets/poster.png";
import star from "../assets/star.svg";

import styles from "./MovieDetails.module.scss";

export default function MovieDetails({ data }) {
  console.log(data);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.poster}>
          <img src={poster} alt="" />
        </div>
        <div className={styles.title}>
          <span>MaileHereko / Movies</span>
          <h3 className="h3">Avengers: Endgame</h3>
        </div>
      </div>

      <div className={styles.main}>
        <div className={`${styles.image}  `}>
          <img src={img} width={480} alt="" />
        </div>

        <div className={styles.box}>
          <h4 className="h4">Part of the journey is the end.</h4>
          <p className="p">
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>
          <div className={styles.rating}>
            <img src={star} alt="" />
            8.3
          </div>
          <ul className="list">
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
