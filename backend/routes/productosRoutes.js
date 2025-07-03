import express from 'express';
import { createProd,getAllProducts } from '../actions/product.actions.js';

const router = express.Router();

// Crear producto desde MongoDB
router.post('/create', async (req, res) => {
    console.log("🟢 Entrando a POST /create");
  const { name, descripcion, stock, price,categoria } = req.body;
  try {
    const result = await createProd({ name, descripcion, stock, price, categoria });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json();
  }
});

 //Obtener todos los productos
router.get('/', async (_req, res) => {
  try {
    const productos = await getAllProducts();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// de prueba, si no anda borrar este get y dejar la de arriba

router.get('/', async (req, res) => {
  const { categoria } = req.query.categoria;
  try {
    const query = categoria ? { categoria } : {}; // 🔍 Filtra si viene una categoría
    const productos = await productos.find(query);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Obtener producto por ID
router.get('/:id', async (req, res) => {
  try {
    const producto = await getProductById(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const producto = await updateProduct(req.params.id, req.body);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    res.json({ mensaje: 'Producto eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

export default router;








// estos pàsos son `para el productosController.js,al utilizar directamente createproduc del action el productosController, ya no sirve

/*import express from 'express';
import obtenerProductos from '../controllers/productosController.js';
const router = express.Router();

// Ruta GET /api/productos
router.get('/', obtenerProductos);

export default router;*/