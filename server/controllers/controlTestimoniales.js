const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    });
}

exports.guardarTestimonial = async (req, res) => {
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
    const testimonial = await Testimonial.create({
      nombre, 
      correo, 
      mensaje
    });
    res.redirect('/testimoniales');
  }
}