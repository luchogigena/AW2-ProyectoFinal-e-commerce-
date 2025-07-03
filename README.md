<<<<<<< HEAD
🛍️ Proyecto Final - Aplicaciones Web II
 Descripción
Este proyecto es una de una aplicación de e-commerce básica desarrollada con el stack MERN (MongoDB, Express, Astro, Node.js). Permite a los usuarios:
•	Registrarse e iniciar sesión.
•	Agregar productos al carrito.
•	Finalizar compras autenticadas.
•	Administrar los productos desde el backend.
 Stack Tecnológico
•	Frontend: Astro + Tailwind CSS + JavaScript
•	Backend: Node.js + Express
•	Base de datos: MongoDB + Mongoose
•	Autenticación: JWT (JSON Web Tokens)
 Herramientas adicionales
•	bcryptjs para hashear contraseñas
•	dotenv para variables de entorno
•	nodemon (en desarrollo) para recargar automáticamente
 Estructura del Proyecto
backend/
├── controllers/
├── models/
├── routes/
├── scripts/
│   ├── cargarProductos.js
│   └── cargarUsuarios.js
├── .env
└── index.js

frontend/
├── pages/
│   ├── index.astro
│   ├── login.astro
│   └── carrito.astro
├── public/
│   └── img/
├── styles/
│   └── tailwind.css
└── astro.config.mjs
 Base de Datos
La base de datos MongoDB incluye colecciones:
•	usuarios
•	productos
•	ordenes
 Carga inicial
Se proporcionan scripts para poblar la base de datos con datos de prueba:
node scripts/cargarUsuarios.js
node scripts/cargarProductos.js
 Nota importante sobre integridad de datos
Se valida rigurosamente:
•	El email no se repite en usuarios.
•	Los productos tienen nombre, precio y categoría obligatorios.
•	Las órdenes no se crean sin productos ni sin autenticación.
 Pruebas de funcionalidad
Se verificaron y funcionan correctamente:
•	Registro y login de usuarios
•	Agregado y visualización de productos en el carrito
•	Finalización de compras con token JWT
•	Manejo de errores (credenciales inválidas, token vencido, etc.)
 Video demostración
 https://drive.google.com/uc?id=1k3qYdExbuEgN1Zx163j2h9LQqkPymdie&export=download


 Clonar y ejecutar
git clone https://github.com/luchogigena/AW2-ProyectoFinal-e-commerce-.git
cd backend
npm install
cp .env.example .env  # configurar tu cadena de conexión a MongoDB
node scripts/cargarUsuarios.js
node scripts/cargarProductos.js
npm run dev
Autor
•	Estudiante: Luciano Gigena

=======
# AW2-ProyectoFinal-e-commerce-
Este proyecto es una de una aplicación de e-commerce básica desarrollada con el stack MERN (MongoDB, Express, Astro, Node.js)
>>>>>>> 35562098887531fa2975de120f82558f8e88f9ef
