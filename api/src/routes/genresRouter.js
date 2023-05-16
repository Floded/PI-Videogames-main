const { Router } = require("express");

const genresRouter = Router();

genresRouter.get("/genres", (req, res) => {
  res.status(200).send("NIY: ESTA RUTA TRAE LOS GENEROS");
});

module.exports = genresRouter;
