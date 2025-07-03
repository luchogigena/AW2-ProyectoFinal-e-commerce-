//Se ocupa del registro y login de usuarios con contraseña encriptada y token JWT.





import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../data/usuario.js';

export const registrarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) return res.status(400).json({ mensaje: 'El usuario ya existe' });

    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ email, password: hash });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en registrarUsuario:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: usuario._id }, 'secreto123', { expiresIn: '1h' });
    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en loginUsuario:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};





















// este bloque de codigo funciona -- desde aca
/*import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../data/usuario.js';



//REGISTRO
const registrarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ email, password: hash });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en registrarUsuario:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
//LOGIN

const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ email: usuario.email }, 'secreto123', { expiresIn: '1h' });
    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en loginUsuario:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};


export { registrarUsuario, loginUsuario }
<<< hasta aca

//Login- arreglo en memoria.

/*const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  const esValido = await bcrypt.compare(password, usuario.password);
  if (!esValido) {
    return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ email: usuario.email }, 'secreto123', { expiresIn: '1h' });

  res.json({ mensaje: 'Login exitoso', token });
};

export { registrarUsuario, loginUsuario };


// Login-mongo




*/