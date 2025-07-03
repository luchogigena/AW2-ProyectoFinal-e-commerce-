import Usuario from '../models/usuarioModel.js';

// Crear usuario
export const createUser = async ({ email, password }) => {
  try {
    const nuevoUsuario = new Usuario({ email, password });
    await nuevoUsuario.save();
    return nuevoUsuario;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

// Buscar usuario por email
export const findUserByEmail = async (email) => {
  return await Usuario.findOne({ email });
};