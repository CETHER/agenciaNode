const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

module.exports = function() {
  router.get('/', (req,res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      pagina: 'Sobre Nosotros'
    });
  });

  router.get('/viajes', (req, res) => {
    Viaje.findAll()
      .then(viajes => res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
      }))
      .catch(error => console.log(error))
  });

  router.get('/viajes/:id', (req, res) => {
    Viaje.findByPk(req.params.id)
      .then(viaje => res.render('viaje', {
        viaje
      }))
      .catch(error => console.log(error))
  });

  router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
      pagina: 'Testimoniales'
    });
  });

  //cuando se llena el formulario
  router.post('/testimoniales', (req, res) => {
    //validar que todos los campo estén llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if (!nombre) {
      errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if (!correo) {
      errores.push({'mensaje': 'Agrega tu Correo'})
    }
    if (!mensaje) {
      errores.push({'mensaje': 'Agrega tu Mensaje'})
    }
    //revisar por errores
    if (errores.length > 0) {
      //muestra la vista con errores
      res.render('testimoniales', {
        errores,
        nombre,
        correo,
        mensaje
      })
    } else {
      // guarda en la base de datos
      Testimonial.create({
        nombre, 
        correo, 
        mensaje
      })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }

  })

  return router;
}