import { useState } from "react"
import { useEffect } from "react";
import { seriesData } from "../service/apiSeries";
import CardSeries from "./CardSeries";
import style from "./rechercheSeries.module.css"
const RechercheSeries= ()=>{
    const [series,setSeries]= useState("")
    const [resultats, setResultats] = useState([]);
    const [page, setPage] = useState(1);
    const [pageMax, setPageMax] = useState(-1);

    const handleChange =(event)=>{
      setSeries(event.target.value);
      setPage(1);
      
    }

     useEffect(()=>{
    const timer = setTimeout(async()=>{
        if (series !=="" && series.length>=3){
            console.log("j'envoi la requete");
          
             const data = await seriesData(series,page);
             setResultats(data.results);
             setPage(data.page)
             setPageMax(data.total_pages)
             console.log(data);
            
        }

    },800);
    return () =>{
        clearInterval(timer);
    }

  }, [series, page, pageMax])
    return(
        <>
         <main className={style.page}>
      <div >
        <h2 className={style.title}>Recherche de series</h2>
        <form action="" className={style.form} onSubmit={(e)=> {e.preventDefault();}}>
          <input type="text" className={style.input} id="recherche" name="recherche"  placeholder="Rechercher un film..." onChange={handleChange}  />
           <button >Rechercher</button>

        
    <div className={style.cardsContainer}>
     {resultats?.map((film) => (
    <CardSeries
      key={film.id}
      film={film}
     />
     ))}
    </div>
        
       </form>
       </div>

       </main>
        { page<pageMax &&
          <button type="button" onClick={() => setPage(page + 1)}>
           Suivant
          </button>
        }
        <button
  type="button"
  onClick={() => setPage(page - 1)}
>
  Précédent
</button>
        </>
    )
}
export default RechercheSeries