const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gameRouter = require("./gameRouter");
const genresRouter = require("./genresRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get("/videogames/:id", (req, res) => {
//   res
//     .status(200)
//     .send(
//       "NIY: Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego."
//     );
// });

router.use("/videogames", gameRouter);
router.use("/genres", genresRouter);

module.exports = router;
