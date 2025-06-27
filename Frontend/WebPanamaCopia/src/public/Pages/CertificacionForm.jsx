import React, { useState } from 'react';
import '../styles/CertificacionForm.css';
import api from '../../api/api.js';

const CertificacionForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    cedula: '',
    nacimiento: '',
    edad: '',
    sexo: '',
    correo: '',
    confirmarCorreo: '',
    telefono: '',
    direccion: '',
    pasaporte: '',
    expedicion: '',
    vencimiento: '',
    tipoSolicitante: '',
    tipoAnexo: '',
    titulo: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('/create-session', form);
      console.log('Respuesta Stripe:', res.data);

      if (res.data.url) {
        window.location.href = res.data.url; 
      } else {
        console.error('No se recibió URL para redirigir.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="cert-form">
      {/* Título */}
      <div className="form-header">
        <h1>Solicitud de Certificación</h1>
      </div>

      {/* Información Personal */}
      <div className="form-section">
        <h2>👤 Información Personal</h2>
        <div className="form-grid">
          <input name="nombre" placeholder="Nombre Completo" value={form.nombre} onChange={handleChange} />
          <input name="cedula" placeholder="Cédula" value={form.cedula} onChange={handleChange} />
          <input type="date" name="nacimiento" value={form.nacimiento} onChange={handleChange} />
          <input name="edad" placeholder="Edad" value={form.edad} onChange={handleChange} />
          <select name="sexo" value={form.sexo} onChange={handleChange}>
            <option value="">Seleccione Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
      </div>

      {/* Información de Pasaporte */}
      <div className="form-section">
        <h2>🛂 Información de Pasaporte</h2>
        <div className="form-grid">
          <input name="pasaporte" placeholder="Número de Pasaporte" value={form.pasaporte} onChange={handleChange} />
          <input type="date" name="expedicion" value={form.expedicion} onChange={handleChange} />
          <input type="date" name="vencimiento" value={form.vencimiento} onChange={handleChange} />
        </div>
        <button className="add-btn" type="button">+ Agregar</button>
      </div>

      {/* Información de Contacto */}
      <div className="form-section">
        <h2>📞 Información de Contacto</h2>
        <div className="form-grid">
          <input name="correo" placeholder="Correo Electrónico" value={form.correo} onChange={handleChange} />
          <input name="confirmarCorreo" placeholder="Confirmar Correo Electrónico" value={form.confirmarCorreo} onChange={handleChange} />
          <input name="telefono" placeholder="Teléfono de Contacto" value={form.telefono} onChange={handleChange} />
          <input name="direccion" placeholder="Dirección Actual" value={form.direccion} onChange={handleChange} />
        </div>
      </div>

      {/* Documentos Adjuntos */}
      <div className="form-section">
        <h2>📎 Documentos para adjuntar a su solicitud</h2>
        <div className="form-grid">
          <input name="tipoAnexo" placeholder="Tipo Anexo" value={form.tipoAnexo} onChange={handleChange} />
          <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} />
          <select name="tipoSolicitante" value={form.tipoSolicitante} onChange={handleChange}>
            <option value="">Tipo Solicitante</option>
            <option value="ciudadano">Ciudadano</option>
            <option value="extranjero">Extranjero</option>
          </select>
        </div>
      </div>

      {/* Botón Enviar */}
      <div className="form-footer">
        <button className="submit-btn" onClick={handleSubmit}>
          🔴 Enviar
        </button>
      </div>
    </div>
  );
};

export default CertificacionForm;
