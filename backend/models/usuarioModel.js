import mongoose from "mongoose";
import UsuarioSchema from "./schemas/usuario.schema.js";

const Usuario = mongoose.models.usuario || mongoose.model("usuario", UsuarioSchema);

export default Usuario;