import productos from '../data/productos.js';

const obtenerProductos = (req, res) => {
  const { categoria } = req.query;
  const result = categoria
    ? productos.filter(p => p.categoria === categoria)
    : productos;
  res.json(result);
};

export default obtenerProductos;