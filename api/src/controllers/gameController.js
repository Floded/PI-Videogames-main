require("dotenv").config();
// Aqui vamos a poder trabajar con el Modelo ya creado para la BDD, para ello lo importamos.

const { Videogames, Genres } = require("../db");
const { Op } = require("sequelize");

const { API_KEY } = process.env;
const axios = require("axios");
const { cleanArray } = require("../utils/functionsExtras");

// Url api externa
const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

// Con esta funcion asicnronica creamos el Videojuego en la BDD para luego requerirlo en en Handler..
// funcionando -------
const createVideogame = async (
  name,
  description,
  platforms,
  image,
  launchDate,
  rating,
  genres
) => {
  const isGameAlreadyExists = await Videogames.findOne({
    where: {
      name,
    },
  });
  if (isGameAlreadyExists) {
    throw Error("El juego ya se encuentra en el catalogo");
  }

  const newGame = await Videogames.create({
    name,
    description,
    platforms,
    image,
    launchDate,
    rating,
  });
  newGame.setGenres([...genres]);
  const gameInserted = await Videogames.findOne({
    where: {
      id: newGame.id,
    },
    include: [
      {
        model: Genres,
        through: { attributes: [] }, // using empty array will cause not to return the relation fields at all
      },
    ],
  });
  console.log(gameInserted);
  return gameInserted;
};

// Get/ById // funcionando-----
const findByIdVideogame = async (id, search) => {
  const flag =
    search === "API"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data
      : await Videogames.findByPk(id);

  return flag;
};

//Get all games
// Funcionando -------
const getAllGame = async () => {
  //Buscar en BDD

  const bddGames = await Videogames.findAll();
  //Buscar en API

  const apiGamesS = (await axios.get(URL)).data.results;
  const apiGames = cleanArray(apiGamesS);
  // unicicar ambas

  return [...bddGames, ...apiGames];
};

// Get by query
const searchGameByname = async (name) => {
  // Buscar por BDD
  const bddGames = await Videogames.findAll({
    where: { name: { [Op.like]: `${name}%` } },
  });
  // Buscar por Api
  const apiGamesS = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    )
  ).data.results;
  const apiGames = cleanArray(apiGamesS);

  let filteredApi = apiGames.filter((element) =>
    element.name.toLowerCase().includes(name)
  );
  // console.log(filteredApi);
  // unificar ambas

  return [...filteredApi, ...bddGames];
};

// Get/Genres

module.exports = {
  createVideogame,
  findByIdVideogame,
  searchGameByname,
  getAllGame,
};
