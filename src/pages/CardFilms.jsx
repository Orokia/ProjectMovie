import style from "./cardFilms.module.css" 
import { Link } from "react-router";
const CardFilms=({film})=>{
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
        </Link>
      </div>
    </div>

         

        </>

    )
}
export default CardFilms;