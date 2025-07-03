//Protege rutas, asegurándose que el usuario esté logueado (token válido).


import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, 'secreto123');
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(403).json({ mensaje: 'Token inválido o expirado' });
  }
};

export default authMiddleware;




// este bloque de codigo funciona


/*import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Espera: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto123');
    req.usuario = decoded; // guardamos info útil del token
    next(); // pasa al siguiente middleware o ruta
  } catch (error) {
    res.status(403).json({ mensaje: 'Token inválido o expirado' });
  }
};

export default authMiddleware;
*/