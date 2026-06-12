import style from "./pageAcceuil.module.css"
 import {Link} from "react-router"
const PageAccueil=()=>{
    return(
        <>
         <div className={style.acceuil}>
      <div className={style.overlay}>
        <h1>
          Découvrez les meilleurs films et séries du moment
        </h1>

        <p>
          Recherchez, explorez et trouvez vos prochaines
          pépites parmi des milliers de films et séries.
        </p>
        <div className={style.buttons}>
  <Link className={style.btn} to="/films">
    Films
  </Link>

  <Link className={style.btn} to="/series">
    Séries
  </Link>
</div>
        
      </div>
    </div>

        </>

    )
}
export default PageAccueil;