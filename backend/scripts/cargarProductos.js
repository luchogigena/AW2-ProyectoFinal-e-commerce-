import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Producto from '../models/productoModel.js';

dotenv.config(); // 🔁 Cargar las variables de entorno

const productos = [
  { nombre: "Camiseta", categoria: "ropa", precio: 20 },
  { nombre: "Pantalón", categoria: "ropa", precio: 30 },
  { nombre: "Zapatillas", categoria: "calzado", precio: 50 },
  { nombre: "Campera", categoria: "ropa", precio: 80 },
  { nombre: "Gorra", categoria: "accesorios", precio: 15 },
  { nombre: "Bufanda", categoria: "accesorios", precio: 18 },
  { nombre: "Remera", categoria: "ropa", precio: 10 },
  { nombre: "Short", categoria: "ropa", precio: 25 },
  { nombre: "Ojotas", categoria: "calzado", precio: 10 },
  { nombre: "Mochila", categoria: "accesorios", precio: 60 },
];

const cargarProductos = async () => {
  console.log('🔍 Iniciando carga de productos...');
  try {
    await mongoose.connect(process.env.MONGODB_URI); // ⬅️ Usamos la variable del .env
    console.log('🟢 Conectado a MongoDB');

    const datosTransformados = productos.map(p => ({
      name: p.nombre,
      categoria: p.categoria,
      price: p.precio,
       stock: 10,
      descripcion: `${p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1)} básica`
    }));

    await Producto.insertMany(datosTransformados);
    console.log('✅ Productos cargados correctamente');
    process.exit();
  } catch (error) {
    console.error('❌ Error al cargar productos:', error);
    process.exit(1);
  }
};

cargarProductos();