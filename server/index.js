//importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
require('dotenv').config({path: 'variables.env'});


/* db.authenticate()
  .then(() => console.log('DB conectada'))
  .catch( error =>console.log(error));
 */

 //configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estática llamada public
app.use(express.static('public'));

//validar si estams en desarrollo o producción
const config = configs[app.get('env')];

//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año acutal en footer
app.use((req, res, next) => {
  //crear una nueva fecha y genera la ruta
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
})

//ejecutar el body parser
app.use(bodyParser.urlencoded({extend: true}));

//Cargar las rutas
app.use('/', routes());

/* Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('El servidor está funcionando');
});