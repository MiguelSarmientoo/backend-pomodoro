const { Sequelize } = require('sequelize');
const config = require('./config');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  logging: config.db.logging
});

module.exports = sequelize;
