require("dotenv").config();
const { API_KEY } = process.env;

const {
  createVideogame,
  findByIdVideogame,
  getAllGame,
  searchGameByname,
} = require("../controllers/gameController");
const { responseMapper } = require("../utils/functionsExtras");



const getByIdVideogamesHandler = async (req, res) => {
  const { id } = req.params;
  const search = isNaN(id) ? "BDD" : "API";
  try {
    const findId = await findByIdVideogame(id, search);
    // console.log(findId);
    res.status(200).json(findId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createVideogameHandler = async (req, res) => {
  try {
    const { name, description, platforms, image, launchDate, rating, genres } =
      req.body;
    // Si no llegan alguno de los siguientes parametros el codigo no se ejecutara y retornara el error 400
    if (
      !name ||
      !description ||
      !platforms ||
      !image ||
      !launchDate ||
      !rating ||
      !genres
    ) {
      // responseMapper es una funcion que retorna la data o el error..
      // Usar responseMapper en todas las respuestas para limpiar el codigo

      res
        .status(400)
        .json(responseMapper(true, "completa todos los campos", null));
      return;
    }
    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      launchDate,
      rating,
      genres
    );
    res.status(200).json(responseMapper(false, "juego creado", newVideogame));
  } catch (error) {
    res.status(500).json(responseMapper(true, error.message, null));
  }
};

const getVideogamesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const results = name ? await searchGameByname(name) : await getAllGame();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getByIdVideogamesHandler,
  getVideogamesHandler,
  createVideogameHandler,
};
