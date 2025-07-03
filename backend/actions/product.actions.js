import { connectToDatabase } from "../db/connection.js";
import Producto from "../models/productoModel.js";

// Crear producto en MongoDB
export const createProd = async ({ name, descripcion, price, stock, categoria }) => {
  try {
    await connectToDatabase(); // conexión desde  archivo connection.js
   // const nuevoProducto = await Producto.create({ name, descripcion, price, stock });
  //return nuevoProducto;

    const res = await Producto.create({ name, descripcion, price, stock,categoria });
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};


// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    await connectToDatabase();
    const productos = await Producto.find();
    return productos;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};