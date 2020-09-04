const express = require('express');
const router = express.Router();

/* Controladores */
const controlNosotros = require('../controllers/controlNosotros');
const controlHome = require('../controllers/controlHome');
const controlViajes = require('../controllers/controlViajes');
const controlTestimoniales = require('../controllers/controlTestimoniales');

module.exports = function() {
  //Routers
  //Home
  router.get('/', controlHome.consultasHomepage);

  //Nosotros
  router.get('/nosotros', controlNosotros.infoNosotros);

  //Viajes
  router.get('/viajes', controlViajes.mostrarViajes);

  //Viaje
  router.get('/viajes/:id', controlViajes.mostrarViaje);

  //Testimoniales
  router.get('/testimoniales', controlTestimoniales.mostrarTestimoniales);

  //Guardar testimonial
  router.post('/testimoniales', controlTestimoniales.guardarTestimonial);

  return router;
}