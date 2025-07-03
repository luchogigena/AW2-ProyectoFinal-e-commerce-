
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const ProductoSchema = new Schema({
  name: { type: String, required: true},
 
 descripcion: { type: String, default: ''},
  price: { type: Number, required: true },
  stock: { type: Number, default:0 },
  categoria: { type: String, enum: ['ropa', 'calzado', 'accesorios'], default: '' },
   
});

const Producto = models.Producto || model('Producto', ProductoSchema);
//export default Producto;
export default ProductoSchema;