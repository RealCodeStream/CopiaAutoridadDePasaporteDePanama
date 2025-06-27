import Servicio from '../services/servicioPasaporte.js'

async function create(req, res, next) {
  try {
    const nueva = await Servicio.crearSolicitud(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    next(err);
  }
}

async function getAll(req, res, next) {
  try {
    const lista = await Servicio.obtenerTodas();
    res.json(lista);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const item = await Servicio.obtenerPorId(req.params.id);
    if (!item) return res.status(404).json({ msg: 'No encontrado' });
    res.json(item);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const updated = await Servicio.actualizarSolicitud(req.params.id, req.body);
    if (!updated) return res.status(404).json({ msg: 'No encontrado' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await Servicio.eliminarSolicitud(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

export default {
  create,
  getAll,
  getById,
  update,
  remove
};