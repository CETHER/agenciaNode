const Sequelize = require('sequelize');

const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
  nombre: {
    tye: Sequelize.STRING
  },
  correo: {
    tye: Sequelize.STRING
  },
  mensaje: {
    tye: Sequelize.STRING
  },
});

module.exports = Testimonial;