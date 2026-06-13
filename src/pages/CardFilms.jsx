import style from "./cardFilms.module.css" 
import { Link } from "react-router";
import { addFavoriteMovie } from "../service/ApiFavories";
import { useState } from "react";
const CardFilms=({film})=>{
  const [message, setMessage] = useState("");
  const handleFavorite = async () => {
  await addFavoriteMovie(film);

  setMessage("Film ajouté aux favoris !");

  setTimeout(() => {
    setMessage("");
  }, 2000);
};

    return(
        <>
        <div className={style.card}>
       <img
        src={`https://image.tmdb.org/t/p/w1280/${film.poster_path}`}
        alt={film.title}
        className={style.image}
      /> 

        <div className={style.content}>
        <h3>{film.title}</h3>

        <p>
          <strong>Date :</strong> {film.release_date}
        </p>

        <p className={style.overview}>
          {film.overview}
        </p>
         <Link
          to={`/film/${film.id}`}
          state={{ film }}
        >
          <button className={style.button}>Détail du film</button>
          <button className={style.favoriteButton} onClick={handleFavorite} >
          ❤️ Ajouter aux favoris
          </button>
          {message && (
  <p className={style.success}>
    {message}
  </p>
)}
        </Link>
      </div>
    </div>

         

        </>

    )
}
export default CardFilms;