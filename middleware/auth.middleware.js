const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Middleware para verificar la autenticación del usuario
const authMiddleware = async (req, res, next) => {
  // Obtener el token del header de autorización
  const authHeader = req.header('Authorization');

  // Verificar si no hay token
  if (!authHeader) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  const token = authHeader.split(' ')[1]; // Extraer el token después de 'Bearer '

  if (!token) {
    return res.status(401).json({ msg: 'Token no válido, autorización denegada' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Añadir el usuario desde el token verificado al objeto de solicitud
    req.user = await User.findByPk(decoded.userId);
    next();

  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = authMiddleware;
