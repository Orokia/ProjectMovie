import style from "./detail.module.css"
import {  useParams } from "react-router";
import { useState,useEffect } from "react";
const DetailFilms=()=>{

    const {id} = useParams()
    const [films, setFilms]= useState(null)

     useEffect(() => {
     const Details = async () => {
      const response = await fetch(`https://api-media-ipssi.julienpoirier-webdev.com/api/movies/${id}`);

      const data =await response.json();

      setFilms(data)
    };
    Details();

    
  }, [])

    return(
        <>
        <div className={style.card}>
            <img
                    src={`https://image.tmdb.org/t/p/w1280/${films?.poster_path}`}
                    alt={films?.title}
                    className={style.image}
                    
                  /> 
         <h3>{films?.name}</h3>
        <div className={style.content}>
          <h1 className={style.title}>{films?.title}</h1>

          <p className={style.date}>
            <strong>Date de sortie :</strong> {films?.release_date}
          </p>

          <p className={style.overview}>
            {films?.overview}
          </p>
        </div>

        </div>
    
        </>

    )
}
export default DetailFilms



  