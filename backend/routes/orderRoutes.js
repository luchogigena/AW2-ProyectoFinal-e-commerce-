
// Usa el middleware para proteger la creación de órdenes. Usa el usuario.id del token

import express from 'express';
import { createOrder, getOrdersByUser } from '../actions/order.actions.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong desde orders 🥁');
});

router.post('/create', authMiddleware, async (req, res) => {
  const { productos, total } = req.body;
  const usuarioId = req.usuario.id;

  console.log("🛎️ POST /create recibido");
  console.log("📦 Body:", { usuarioId, productos, total });

  try {
    const orden = await createOrder({ usuarioId, productos, total });
    console.log("✅ Orden creada correctamente:", orden);
    res.status(201).json(orden);
  } catch (error) {
    console.error("❌ Error al crear orden:", error);
    res.status(500).json({ error: 'Error al crear orden' });
  }
});

router.get('/:usuarioId', async (req, res) => {
  try {
    const ordenes = await getOrdersByUser(req.params.usuarioId);
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes del usuario' });
  }
});

export default router;


// este bloque de codigo funciona
/*import express from 'express';
import { createOrder,getOrdersByUser  } from '../actions/order.actions.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();
router.get('/ping', (req, res) => {
  res.send('pong desde orders 🥁');
});
router.post('/create', authMiddleware ,async (req, res) => {
  const { usuarioId, productos, total } = req.body;

  console.log("🛎️ POST /create recibido");
  console.log("📦 Body:", { usuarioId, productos, total });

  try {
    const orden = await createOrder({ usuarioId, productos, total });
    console.log("✅ Orden creada correctamente:", orden);

    res.status(201).json(orden);
  } catch (error) {
    console.error("❌ Error al crear orden:", error);
    res.status(500).json({ error: 'Error al crear orden' });
  }
});
// NUEVA RUTA GET: traer órdenes por usuario, con populate
router.get('/:usuarioId', async (req, res) => {
  try {
    console.log("🟢 Buscando órdenes de:", req.params.usuarioId);
    
    const ordenes = await getOrdersByUser(req.params.usuarioId);
    
    console.log("✅ Órdenes encontradas:", ordenes);
    res.json(ordenes);
  } catch (error) {
    console.error("❌ Error real:", error);
    res.status(500).json({ error: 'Error al obtener órdenes del usuario' });
  }
});
export default router;*/