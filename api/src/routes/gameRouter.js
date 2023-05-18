const { Router } = require("express");

const gameRouter = Router();

gameRouter.get("/:id", (req, res) => {
  res
    .status(200)
    .send(
      "NIY: Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego."
    );
});

gameRouter.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "NIY: Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información."
    );
});

gameRouter.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "NIY: Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query."
    );
});

gameRouter.post("/", (req, res) => {
  res
    .status(200)
    .send(
      "NIY: Obtiene un arreglo con todos los géneros existentes de la API."
    );
});

module.exports = gameRouter;
