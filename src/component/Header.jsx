import style from "./header.module.css"
 import {Link} from "react-router"

const Header=()=>{
    return(
        <>
        <header>
        <nav className={style.header}>
              <h1 className={style.logo}>Logo</h1>
               <div className={style.navcontainer}>
              <h1 ></h1>
              <Link to={{ pathname: "/films"}}> Films</Link>
               <Link to={{ pathname: "/series"}}> Series</Link>
               <Link to={{ pathname: "/favories"}}> Favories</Link>

          <ul className={style.navmenu}>
             
             
          </ul>
          </div>
        </nav>
      </header>
        </>
          

    )

};
export default Header;