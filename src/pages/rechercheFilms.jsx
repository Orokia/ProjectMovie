import { useState} from "react";
import { useEffect } from "react";
import { filmsData } from "../service/api";
import CardFilms from "./CardFilms";
import style from "./rechercheFilms.module.css"

const RechercheFilms=()=>{
    const [films, setFilms] = useState("");
    const [resultats, setResultats] = useState([]);
    const [page, setPage] = useState(1);
    const [pageMax, setPageMax] = useState(-1);

    
    const handleChange =(event)=>{
      setFilms(event.target.value);
      setPage(1);
      
    }
    useEffect(()=>{
    const timer = setTimeout(async()=>{
        if (films !=="" && films.length>=3){
            console.log("j'envoi la requete");
          
             const data = await filmsData(films,page);
             setResultats(data.results);
             setPage(data.page)
             setPageMax(data.total_pages)
             console.log(data);
            
        }

    },800);
    return () =>{
        clearInterval(timer);
    }

  }, [films, page, pageMax])
console.log(resultats);
console.log(Array.isArray(resultats));
  console.log("Page actuelle :", page);

    return(
        <>
        <main className={style.page}>
      <div >
        <h2 className={style.title}>Recherche de films</h2>
        <form action="" className={style.form} onSubmit={(e)=> {e.preventDefault();}}>
          <input type="text" className={style.input} id="recherche" name="recherche"  placeholder="Rechercher un film..." onChange={handleChange}  />
          <div className={style.pagination}>
             <button >Rechercher</button>

          </div>
          
        
           

<div className={style.cardsContainer}>
  {resultats?.map((film) => (
    <CardFilms
      key={film.id}
      film={film}
    />
  ))}
</div>
        
       </form>
       </div>

       </main>
        <div className={style.pagination}>
  {page > 1 && (
    <button
      type="button"
      onClick={() => setPage(page - 1)}
    >
      ← Précédent
    </button>
  )}
  { page > 1 && (
    <span>
    Page {page} / {pageMax}
  </span>
  )

  }
  

  {page < pageMax && (
    <button
      type="button"
      onClick={() => setPage(page + 1)}
    >
      Suivant →
    </button>
  )}
</div>
       
       </>

 

    )
}
export default RechercheFilms;