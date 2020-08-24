const Sequelize = require ('sequelize');

const db = require('../config/database');

const Viaje = db.define('viaje', {
  titulo: {
    type: Sequelize.STRING
  },
  precio: {
    type: Sequelize.STRING
  },
  fecha_salida: {
    type: Sequelize.DATEONLY
  },
  fecha_regreso: {
    type: Sequelize.DATEONLY
  },
  imagen: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  disponibilidad: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE(6)
  },
  updated_at: {
    type: Sequelize.DATE(6)
  },
  deleted_at: {
    type: Sequelize.DATE(6)
  }
});

module.exports = Viaje;

