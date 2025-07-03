import Orden from "../models/ordenModel.js";
import '../models/productoModel.js';
import Usuario from '../models/usuarioModel.js';


export const createOrder = async ({ usuarioId, productos, total }) => {
  try {
    const nuevaOrden = new Orden({ usuarioId, productos, total });
    await nuevaOrden.save();
    return nuevaOrden;
  } catch (error) {
    console.error('Error al crear orden:', error);
    throw error;
  }
};
// Obtener órdenes por usuario con populate
export const getOrdersByUser = async (usuarioId) => {
  return await Orden.find({ usuarioId })
  .populate('usuarioId', 'email') // solo trae el campo email del usuario
  .populate('productos.productoId');
};

// Crear una nueva orden
/*export const createOrder = async ({ productos, email }) => {
  try {
    const nuevaOrden = new Orden({
      productos,
      usuario: email
    });
    await nuevaOrden.save();
    return nuevaOrden;
  } catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
  }
};

// Obtener órdenes por usuario
export const getOrdersByUser = async (email) => {
  return await Orden.find({ usuario: email });
};*/