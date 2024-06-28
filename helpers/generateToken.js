// helpers/generateToken.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: config.jwtExpiration });
};

module.exports = generateToken;
