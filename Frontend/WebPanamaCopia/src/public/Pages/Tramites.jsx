import React from "react";
import "../styles/TramitesPage.css"; 
import { Link } from "react-router-dom";

const Tramites = () => {
  return (
     <div className="tramites-container">

      {/* Paso 1 */}
      <section className="tramites-section">
        <div className="step-circle">1</div>
        <h2 className="step-title">VERIFIQUE LOS REQUISITOS</h2>
        <p className="step-subtitle">
          A continuación la lista de documentos necesarios según el tipo de pasaporte a tramitar, así como el costo del trámite.
        </p>

        <div className="requirements-columns">
          {/* Primera vez */}
          <div className="requirement-column">
            <h3>📌 PASAPORTE POR PRIMERA VEZ</h3>
            {["Personas Regulares", "Jubilados", "Menores de Edad", "Naturalizados", "Diplomáticos y Consulares", "Oficiales", "Rentista Retirado"].map((item, i) => (
              <div key={i} className="requirement-item">
                {item} <span>&gt;</span>
              </div>
            ))}
          </div>

          {/* Renovación */}
          <div className="requirement-column">
            <h3>📌 RENOVACIÓN DE PASAPORTE</h3>
            {["Personas Regulares", "Jubilados", "Menores de Edad", "Naturalizados", "Diplomáticos y Consulares", "Oficiales", "Rentista Retirado"].map((item, i) => (
              <div key={i} className="requirement-item">
                {item} <span>&gt;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paso 2 */}
      <section className="tramites-section light-bg">
        <div className="step-circle">2</div>
        <h2 className="step-title">PRESENTARSE EN LAS OFICINAS DE APAP</h2>

        <div className="office-info">
          {/* Formas de pago */}
          <div className="office-card">
            <h4>💳 FORMAS DE PAGO</h4>
            <p>
              Al presentarse en la Autoridad de Pasaportes, puede pagar con CLAVE, MASTERCARD o VISA...
            </p>
            <p><strong>Cuenta de Depósito: Banco Nacional</strong><br/>N° 1000072081<br/>Autoridad de Pasaportes de Panamá</p>
            <div className="payment-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Tarjeta_Clave.png" alt="Clave" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            </div>
            <Link to="/certificacionform">
  <button className="primary-btn">Autenticaciones Certificaciones</button>
</Link>
            <button className="secondary-btn">Caja Consular</button>
          </div>

          {/* Documentos y foto */}
          <div className="office-card">
            <h4>📸 DOCUMENTOS Y FOTOGRAFÍA</h4>
            <p>
              Preséntese en las oficinas de la APAP con los documentos descritos en el paso 1...
              En las oficinas se tomará la fotografía y se confirmará el trámite.
            </p>
            <button className="primary-btn">Ver Oficinas</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Tramites;
