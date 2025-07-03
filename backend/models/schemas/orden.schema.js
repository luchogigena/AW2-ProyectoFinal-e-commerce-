import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordenSchema = new Schema({
  usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [
    {
      productoId: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true }
    }
  ],
  fecha: { type: Date, default: Date.now },
  total: { type: Number, required: true }
});

export default ordenSchema;







/*import mongoose from 'mongoose';

const { Schema } = mongoose;

const ordenSchema = new Schema({
  productos: [
    {
      id: Number,
      nombre: String,
      precio: Number,
    },
  ],
  usuario: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export default ordenSchema;*/