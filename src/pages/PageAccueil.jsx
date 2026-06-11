import style from "./pageAcceuil.module.css"
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
      </div>
    </div>

        </>

    )
}
export default PageAccueil;