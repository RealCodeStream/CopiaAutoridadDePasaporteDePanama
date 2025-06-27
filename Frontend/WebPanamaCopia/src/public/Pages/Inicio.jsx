import Carrusel from '../../components/Carrusel/Carrusel'
import { User, Folder, HelpCircle } from 'lucide-react';
import prom1 from '../assets/im1C.png'
import prom2 from '../assets/im2C.png'

const imagenes = [
  { id: 1, url: prom1, alt: 'Promoción 1' },
  { id: 2, url: prom2, alt: 'Promoción 2' },
];

const Inicio = () => {
    return(
        <>
            <div className="py-4">
      <Carrusel imagenes={imagenes} /> 
      
    </div >
        
         {/* Banner Section */}
        <div className="mt-16">
          {/* Blue Banner with 100 Days Campaign */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-8 px-6 mb-0">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="text-white">
                  <span className="text-6xl font-bold">100</span>
                  <span className="text-2xl ml-2">Días</span>
                  <div className="text-sm mt-1">#ConPasoFirme</div>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">LOGO</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white text-xl font-semibold">CLIC AQUÍ</span>
                <div className="text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  ¿TIENE PREGUNTAS SOBRE COSTOS, TRÁMITES Y REQUISITOS?
                </h2>
                <p className="text-gray-600 text-lg">
                  REVISE NUESTRA SECCIÓN DE PREGUNTAS FRECUENTES, PROBABLEMENTE ENCUENTRE LA RESPUESTA A SU INQUIETUD.
                </p>
              </div>
              <div className="ml-8">
                <button className="bg-blue-900 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors duration-200">
                  PREGUNTAS FRECUENTES
                </button>
              </div>
            </div>
          </div>
        </div>

         {/* Quality Policy Section */}
        <div className="mt-16 relative overflow-hidden">
          {/* Background with curved design */}
          <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 pt-16 pb-32">
            {/* Curved top border */}
            <div className="absolute top-0 left-0 w-full h-16 bg-white">
              <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 100" fill="none">
                <path d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" fill="url(#blueGradient)" />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Document info */}
            <div className="absolute top-8 right-8 text-white text-right text-sm">
              <div>D-GDC-04</div>
              <div>Versión 2</div>
              <div>29/10/2024</div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-8">
              {/* Header with logos */}
              <div className="flex items-center justify-center mb-12 space-x-8">
                <div className="text-center">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-4 bg-red-500"></div>
                    <span className="text-white font-bold text-lg">GOBIERNO NACIONAL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 text-lg">★</span>
                    <span className="text-white font-bold text-xl">CON PASO FIRME</span>
                    <span className="text-red-500 text-lg">★</span>
                  </div>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">APAP</span>
                  </div>
                </div>
                
                <div className="text-white text-center">
                  <div className="font-bold text-lg">AUTORIDAD DE PASAPORTES</div>
                  <div className="text-sm">DE PANAMÁ</div>
                </div>
              </div>

              {/* Main content */}
              <div className="bg-white bg-opacity-95 rounded-lg p-12 mx-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                  Política de Calidad
                </h1>
                
                <div className="text-gray-700 text-lg leading-relaxed mb-12">
                  <p className="mb-4">
                    "El compromiso de la Autoridad de Pasaportes de Panamá es entregar 
                    un documento de viaje (pasaporte) que cumpla con los estándares de 
                    seguridad internacional, en los tiempos establecidos. Mantener la 
                    Institución como modelo número uno, ofreciendo un servicio 
                    personalizado y eficiente a nivel nacional e internacional. Esto se logra 
                    a través de la inversión en nuevas tecnologías, la capacitación al personal, 
                    modernización, expansión y optimización de los procesos, comprometidos 
                    con la mejora continua del Sistema de Gestión de Calidad, alineados a 
                    la estrategia de la Alta Dirección".
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Sonia de Luzcando
                  </h2>
                  <p className="text-lg text-gray-600 mb-1">
                    Alta Dirección
                  </p>
                  <p className="text-lg text-gray-600">
                    Sistema de Gestión de la Calidad
                  </p>
                </div>
              </div>
            </div>

            {/* Curved bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-16">
              <svg className="w-full h-16" viewBox="0 0 1200 100" fill="none">
                <path d="M0,100 Q600,0 1200,100 L1200,0 L0,0 Z" fill="#e5e7eb" />
              </svg>
            </div>
          </div>

          {/* ISO certification badge */}
          <div className="absolute bottom-8 left-8">
            <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
              <div className="text-white text-center text-xs font-bold">
                <div>ISO</div>
                <div>9001</div>
              </div>
            </div>
          </div>
        </div>



    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ¿QUÉ ESTÁ BUSCANDO?
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Tramitar Pasaporte */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              TRAMITAR PASAPORTE
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              En el siguiente enlace podrá conocer los requisitos y coste de los diferentes 
              pasaportes que otorga la República de Panamá.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
              Trámite de Pasaportes
            </button>
          </div>

          {/* Otros Servicios */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Folder className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              OTROS SERVICIOS
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              En la Autoridad de Pasaporte también se autentican y certifican 
              pasaportes, así como se emiten salvo conductos.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
              Ver Otros Servicios
            </button>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Tienes consultas sobre APAP, los trámites que realizamos y sus 
              procesos. Te invitamos a revisar la sección de Preguntas Frecuentes.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
              Ir a Preguntas Frecuentes
            </button>
          </div>

        </div>
      </div>
    </div>
    
        </>
    );
}

export default Inicio;