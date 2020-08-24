const Sequelize = require ('sequelize');

module.exports = new Sequelize('db_agencia_viajes', 'root', '', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});