import Solicitud from '../models/solicitudPasaporte.js'

async function crearSolicitud(data) {
  const solicitud = new Solicitud(data);
  return await solicitud.save();
}

async function obtenerTodas() {
  return await Solicitud.find().lean();
}

async function obtenerPorId(id) {
  return await Solicitud.findById(id).lean();
}

async function actualizarSolicitud(id, data) {
  return await Solicitud.findByIdAndUpdate(id, data, { new: true }).lean();
}

async function eliminarSolicitud(id) {
  return await Solicitud.findByIdAndDelete(id);
}

export default {
  crearSolicitud,
  obtenerTodas,
  obtenerPorId,
  actualizarSolicitud,
  eliminarSolicitud
};