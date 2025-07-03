
import mongoose from 'mongoose';
import productoSchema from './schemas/producto.schema.js';

const Producto = mongoose.model('Producto', productoSchema);

//const Producto = mongoose.models.Producto || mongoose.model('Producto', productoSchema);
export default Producto;

/*import mongoose from 'mongoose';
import Producto from './schemas/producto.schema.js';

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;*/




//carga de Producto de forma local
/*import productos from '../data/productos.js';

// Obtener todos los productos
const getAll = () => productos;

// Obtener productos filtrados por categoría
const getByCategoria = (categoria) =>
  productos.filter(p => p.categoria === categoria);

export default {
  getAll,
  getByCategoria
};
*/
