// auth.controller.js

const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const generateToken = require('../helpers/generateToken'); // Asegúrate de que generateToken esté correctamente definido

// Registro de un nuevo usuario
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validar si ya existe un usuario con el mismo correo electrónico
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'El usuario ya existe con este correo electrónico' }] });
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear el nuevo usuario
    user = await User.create({ username, email, password: hashedPassword });

    // Generar y devolver el token JWT
    const token = generateToken(user); // Llamar a generateToken con el usuario creado
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Validar si el usuario existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Validar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar y devolver el token JWT
    const token = generateToken(user);
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in', error });
  }
};
