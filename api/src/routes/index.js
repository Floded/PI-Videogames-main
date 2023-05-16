const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gameRouter = require("./gameRouter");
const genresRouter = require("./genresRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// genresRouter.get("/genres", (req, res) => {
//   res.status(200).send("NIY: ESTA RUTA TRAE LOS GENEROS");
// });

router.get("/videogames", gameRouter);
router.post("/videogames", gameRouter);
router.get("/genres", genresRouter);

module.exports = router;
