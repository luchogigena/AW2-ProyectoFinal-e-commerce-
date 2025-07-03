import express from 'express';
import { createUser, findUserByEmail } from '../actions/user.actions.js';
import User from '../models/usuarioModel.js';

const router = express.Router();

// Verificación de conexión
router.get('/ping', (req, res) => {
  res.send('pong');
});

// Crear usuario
router.post('/create', async (req, res) => {
  console.log('📩 Entró a POST /create');
  const { email, password } = req.body;

  try {
    const newUser = await createUser({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("❌ Error real:", error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Buscar usuario por email
router.get('/buscar/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const user = await findUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error('❌ Error al buscar usuario:', error);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

// Eliminar usuario por email
router.delete('/borrar/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    await User.deleteOne({ email });
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al borrar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

export default router;