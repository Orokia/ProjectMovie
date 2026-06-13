import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./pages/Layout.jsx";
import './index.css'
import PageAccueil from './pages/PageAccueil.jsx';
import RechercheFilms from './pages/rechercheFilms.jsx';
import DetailFilms from './pages/DetailFilm.jsx';
import RechercheSeries from './pages/RechercheSeries.jsx';
import PageFavoris from './pages/PageFavories.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      path: "/",
      element: <PageAccueil/>,

      },
      {
        path: "/films",
        element: <RechercheFilms/>,
      },
      {
         path:"/film/:id",
         element: <DetailFilms/>
      },
      {
        path: "/series",
        element: <RechercheSeries/>
      },
      {
        path: "/favories",
        element: <PageFavoris/>
      }
    

    ]
   

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  <RouterProvider router={router} />
  </StrictMode>,
)
