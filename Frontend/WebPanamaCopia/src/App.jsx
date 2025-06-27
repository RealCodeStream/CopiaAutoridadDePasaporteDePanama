import './App.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Inicio from './Pages/Inicio'
import ISO from './Pages/ISO'
import NotiBlog from './Pages/NotiBlog'
import PreguntasFrecuentes from './Pages/PreguntasFrecuentes'
import QuienesSomos from './Pages/quienesSomos'
import Tramites from './Pages/Tramites'
import Transparencia from './Pages/Transparencia'
import Layout from './layout/Layout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />}></Route>
              <Route path="/quienessomos" element={<QuienesSomos />}></Route>
              <Route path="/tramites" element={<Tramites />}></Route>
              <Route path="/transparencia" element={<Transparencia />}></Route>
              <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>}></Route>
              <Route path="/notiblog" element={<NotiBlog/>}></Route>
              <Route path="/iso" element={<ISO/>}></Route>
            </Route>

      </>

      
    )
  );
  return <RouterProvider router={router}/>
}

export default App
