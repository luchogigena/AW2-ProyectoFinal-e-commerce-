import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  email: String,
  password: String
});

export default mongoose.model('Usuario', usuarioSchema);


/*const usuarios = [
  {
    email: "test@mail.com",
    password: "$2a$10$VPphcJxkzFyVPtoYtNq0p.XLfxGqUZG1aQ4GZnO/l6I1yB9HOvwH6"
  },
  {
    email: "luciana@mail.com",
    password: "$2a$10$VPphcJxkzFyVPtoYtNq0p.XLfxGqUZG1aQ4GZnO/l6I1yB9HOvwH6"
  },
  {
    email: "admin@mail.com",
    password: "$2a$10$VPphcJxkzFyVPtoYtNq0p.XLfxGqUZG1aQ4GZnO/l6I1yB9HOvwH6"
  }
];
*/
//export default usuarios;
