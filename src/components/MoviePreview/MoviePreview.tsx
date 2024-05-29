import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({movie}:{movie:Movie}) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };
  console.log(movie.poster_path)

  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <img src={POSTER_URL_PREFIX+movie.poster_path} crossOrigin=""></img>
    <span>{movie.title}</span>
    <div id="stars">
      {[...Array(5)].map((_, index) => (
        <span className={`${styles.quizzItem} ${  
          (index<(movie.vote_average/2)) ? styles.yellow : styles.white
        }`}>★</span>
      ))}
    </div>
  </div>;
};

export default MoviePreview;
