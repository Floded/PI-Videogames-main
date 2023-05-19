const { Router } = require("express");
const { getGenres } = require("../handlers/getGameHandler");

const genresRouter = Router();

genresRouter.get("/", getGenres);

module.exports = genresRouter;
