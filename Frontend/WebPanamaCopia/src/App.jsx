import './App.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Inicio from './public/Pages/Inicio'
import ISO from './public/Pages/ISO'
import NotiBlog from './public/Pages/NotiBlog'
import PreguntasFrecuentes from './public/Pages/PreguntasFrecuentes'
import QuienesSomos from './public/Pages/quienesSomos'
import Tramites from './public/Pages/Tramites'
import CertificacionForm from './public/Pages/CertificacionForm'
import Transparencia from './public/Pages/Transparencia'
import Layout from './public/layout/Layout';
import Success from './public/Pages/Success';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />}></Route>
              <Route path="/quienessomos" element={<QuienesSomos />}></Route>
              <Route path="/tramites" element={<Tramites />}></Route>
              <Route path="/certificacionform" element={<CertificacionForm/>}></Route>
              <Route path="/transparencia" element={<Transparencia />}></Route>
              <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>}></Route>
              <Route path="/notiblog" element={<NotiBlog/>}></Route>
              <Route path="/iso" element={<ISO/>}></Route>
              <Route path="/success" element={<Success />} />
            </Route>

      </>

      
    )
  );
  return <RouterProvider router={router}/>
}

export default App
