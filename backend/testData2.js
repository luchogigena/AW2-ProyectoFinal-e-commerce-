import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const buscarOCrearUsuario = async (email) => {
  try {
    const res = await axios.post(`${API_URL}/users/create`, {
      email,
      password: '123456',
    });
    return res.data;
  } catch (error) {
    if (error.response?.data?.error?.includes('duplicate key')) {
      const usuarioExistente = await axios.get(`${API_URL}/users/email/${email}`);
      return usuarioExistente.data;
    }
    throw error;
  }
};

const buscarOCrearProducto = async (name, descripcion, price, stock) => {
  try {
    const res = await axios.post(`${API_URL}/productos/create`, {
      name,
      descripcion,
      price,
      stock,
    });
    return res.data;
  } catch (error) {
    if (error.response?.status === 400) {
      const productoExistente = await axios.get(`${API_URL}/productos/nombre/${encodeURIComponent(name)}`);
      return productoExistente.data;
    }
    throw error;
  }
};

const main = async () => {
  try {
    // Usuarios
    const usuario1 = await buscarOCrearUsuario('user1@test.com');
    const usuario2 = await buscarOCrearUsuario('user2@test.com');

    // Productos
    const producto1 = await buscarOCrearProducto('Pantalon', 'Con luces LED y DPI ajustable', 18000, 50);
    const producto2 = await buscarOCrearProducto('Auriculares Pro', 'Cancelación de ruido y micrófono', 25000, 30);

    // Órdenes
    const orden1 = await axios.post(`${API_URL}/orders/create`, {
      usuarioId: usuario1._id,
      productos: [
        { productoId: producto1._id, cantidad: 2 },
        { productoId: producto2._id, cantidad: 1 },
      ],
      total: 61000,
    });

    const orden2 = await axios.post(`${API_URL}/orders/create`, {
      usuarioId: usuario2._id,
      productos: [{ productoId: producto2._id, cantidad: 2 }],
      total: 50000,
    });

    console.log('Órdenes creadas:\n', orden1.data, '\n', orden2.data);
  } catch (error) {
    console.error('❌ Error al ejecutar pruebas:', error.response?.data || error.message);
  }
};

main();