
import React, { useState } from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';

const PreguntasFrecuentes = () => {
   const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = {
    generales: [
      "¿Qué documentos debo presentar para el trámite de pasaporte?",
      "¿Hay que madrugar para realizar el trámite de pasaporte?",
      "¿Qué debo hacer si extravié el pasaporte, lo hurtan o se encuentra deteriorado?",
      "¿De cuánto debe ser la vigencia de los pasaportes para poder viajar?",
      "¿El número de pasaporte es el mismo que el mi cédula de identidad personal o mi pasaporte anterior?"
    ],
    metodosPago: [
      "¿Dónde realizo el pago del pasaporte?"
    ],
    entrega: [
      "¿En qué tiempo se entregan los pasaportes?",
      "¿Puedo enviar a otra persona a retirar mi pasaporte?"
    ],
    otras: [
      "¿Es posible que se anule o deje sin efecto un pasaporte panameño?"
    ]
  };

  const toggleQuestion = (category, index) => {
    const questionId = `${category}-${index}`;
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const QuestionItem = ({ question, category, index }) => {
    const questionId = `${category}-${index}`;
    const isExpanded = expandedQuestion === questionId;

    return (
      <div className="border border-gray-200 rounded-lg mb-3 bg-white shadow-sm">
        <button
          onClick={() => toggleQuestion(category, index)}
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-gray-700 text-sm font-medium pr-4">
            {question}
          </span>
          <ChevronRight 
            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        </button>
        {isExpanded && (
          <div className="px-6 pb-4 text-gray-600 text-sm">
            <div className="pt-2 border-t border-gray-100">
              Información detallada sobre esta pregunta aparecería aquí...
            </div>
          </div>
        )}
      </div>
    );
  };

  const SectionHeader = ({ icon, title, color = "blue" }) => (
    <div className="flex items-center mb-6">
      <div className={`w-8 h-8 rounded-full bg-${color}-600 flex items-center justify-center mr-3`}>
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las consultas más comunes sobre trámites de pasaportes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div>
            {/* Generales Section */}
            <div className="mb-10">
              <SectionHeader 
                icon={<HelpCircle className="w-5 h-5 text-white" />}
                title="GENERALES"
              />
              <div>
                {faqData.generales.map((question, index) => (
                  <QuestionItem
                    key={index}
                    question={question}
                    category="generales"
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Métodos de Pago Section */}
            <div className="mb-10">
              <SectionHeader 
                icon={<HelpCircle className="w-5 h-5 text-white" />}
                title="MÉTODOS DE PAGO"
              />
              <div>
                {faqData.metodosPago.map((question, index) => (
                  <QuestionItem
                    key={index}
                    question={question}
                    category="metodosPago"
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Entrega Section */}
            <div className="mb-10">
              <SectionHeader 
                icon={<HelpCircle className="w-5 h-5 text-white" />}
                title="ENTREGA"
              />
              <div>
                {faqData.entrega.map((question, index) => (
                  <QuestionItem
                    key={index}
                    question={question}
                    category="entrega"
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Otras Section */}
            <div className="mb-10">
              <SectionHeader 
                icon={<HelpCircle className="w-5 h-5 text-white" />}
                title="OTRAS"
              />
              <div>
                {faqData.otras.map((question, index) => (
                  <QuestionItem
                    key={index}
                    question={question}
                    category="otras"
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-blue-100 mb-6">
            Contáctanos directamente para obtener más información
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contactar Soporte
          </button>
        </div>

      </div>
    </div>
  );
}

export default PreguntasFrecuentes;