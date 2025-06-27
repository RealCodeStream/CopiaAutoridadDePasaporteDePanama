import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
  nombre:        { type: String, required: true },
  apellido:      { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  genero:        { type: String, enum: ['M','F','Otro'], required: true },
  nacionalidad:  { type: String, required: true }
});

const contactInfoSchema = new Schema({
  telefono:      { type: String, required: true },
  email:         { type: String, required: true },
  direccion:     { type: String, required: true },
  ciudad:        { type: String, required: true },
  provincia:     { type: String, required: true },
  codigoPostal:  { type: String }
});

const passportInfoSchema = new Schema({
  numeroPasaporte:   { type: String, required: true, unique: true },
  fechaEmision:      { type: Date,   required: true },
  fechaVencimiento:  { type: Date,   required: true },
  lugarEmision:      { type: String, required: true }
});

const solicitudPasaporteSchema = new Schema({
  personalInfo: personalInfoSchema,
  contactInfo:  contactInfoSchema,
  passportInfo: passportInfoSchema
}, { timestamps: true });

export default mongoose.model('SolicitudPasaporte', solicitudPasaporteSchema);