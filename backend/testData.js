import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const main = async () => {
  try {
    // Crear usuarios (verifica si existen antes)
    const crearUsuario = async (email) => {
      try {
        const res = await axios.post(`${API_URL}/users/create`, {
          email,
          password: '123456',
        });
        return res.data;
      } catch (error) {
        if (error.response?.data?.error?.includes('duplicate key')) {
          console.warn(`⚠️ Usuario ya existe: ${email}`);
          // En un caso real buscaríamos el usuario por email. Simulamos un _id temporal.
          return { email, _id: 'simulado_id_' + email };
        }
        throw error;
      }
    };

    const usuario1 = await crearUsuario('nvo1@test.com');
    const usuario2 = await crearUsuario('nvo2@test.com');

    console.log('Usuarios:', usuario1.email, usuario2.email);

    // Crear productos
    const producto1 = await axios.post(`${API_URL}/productos/create`, {
      name: 'Mouse Gamer 3',
      descripcion: 'Con luces LED y DPI ajustable',
      price: 18000,
      stock: 50,
    });

    const producto2 = await axios.post(`${API_URL}/productos/create`, {
      name: 'Auriculares Pro 2',
      descripcion: 'Cancelación de ruido y micrófono',
      price: 25000,
      stock: 30,
    });

    console.log('Productos creados:', producto1.data.name, producto2.data.name);

    // Crear órdenes
    const orden1 = await axios.post(`${API_URL}/orders/create`, {
      usuarioId: usuario1._id,
      productos: [
        { productoId: producto1.data._id, cantidad: 2 },
        { productoId: producto2.data._id, cantidad: 1 },
      ],
      total: 61000,
    });

    const orden2 = await axios.post(`${API_URL}/orders/create`, {
      usuarioId: usuario2._id,
      productos: [{ productoId: producto2.data._id, cantidad: 2 }],
      total: 50000,
    });

    console.log('Órdenes creadas:\n', orden1.data, '\n', orden2.data);
  } catch (error) {
    console.error('❌ Error en pruebas:', error.response?.data || error.message);
  }
};

main();