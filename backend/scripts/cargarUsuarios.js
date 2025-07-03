import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from '../models/usuarioModel.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const usuarios = [
  {
    nombre: "Juan",
    email: "juan@example.com",
    password: "123456",
    esAdmin: false,
  },
  {
    nombre: "Admin",
    email: "admin@example.com",
    password: "admin123",
    esAdmin: true,
  },
];

const cargarUsuarios = async () => {
  console.log("👤 Iniciando carga de usuarios...");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🟢 Conectado a MongoDB");

    const usuariosHasheados = await Promise.all(
      usuarios.map(async (u) => ({
        ...u,
        password: await bcrypt.hash(u.password, 10),
      }))
    );

    await Usuario.insertMany(usuariosHasheados);
    console.log("✅ Usuarios cargados correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al cargar usuarios:", error);
    process.exit(1);
  }
};

cargarUsuarios();