const { Router } = require("express");
const { getGenresHandler } = require("../handlers/getGameHandler");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;
