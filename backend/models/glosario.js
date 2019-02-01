'use strict'
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const  Docente = mongoose.model('Docente');

const glosarioSchema = new Schema({
  title: {type: String, required: true},
  description: { type: String, required: true},
  docente: {type: Schema.ObjectId, ref: "Docente"}
  // idDocente: {type: String, required: true}
});

module.exports = mongoose.model('Glosario', glosarioSchema);
