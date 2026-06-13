import { useEffect, useState } from "react";
import { getFavoritesMovies } from "../service/ApiFavories";
import { Link } from "react-router";
import style from "./CardFilms.module.css"
const PageFavoris = () => {
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await getFavoritesMovies();
      setFavoris(data);
    };

    loadFavorites();
  }, []);

  return (
    <div>
    <h1>Mes favoris</h1>

    <div className={style.cardsContainer}>
      {favoris?.map((film) => (
        <div key={film.id} className={style.card}>
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
              <button className={style.button}>
                Détail du film
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default PageFavoris;