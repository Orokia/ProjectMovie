import {  Outlet} from "react-router";
import style from "./Layout.module.css"
import Header from "../component/Header";
const Layout= () =>{
    return(
        <>
        <Header/>
         <main className={style.main}>
         <Outlet/>
       </main>
        </>

    )

};
export default Layout;