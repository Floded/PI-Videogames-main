const { Router } = require("express");

const {
  getByIdVideogames,
  getAllVideogames,
  getQueryVideogames,
  createVideogame,
} = require("../handlers/getGameHandler");

const gameRouter = Router();

gameRouter.get("/:id", getByIdVideogames);

gameRouter.get("/", getAllVideogames);

gameRouter.get("/", getQueryVideogames);

gameRouter.post("/", createVideogame);

module.exports = gameRouter;
