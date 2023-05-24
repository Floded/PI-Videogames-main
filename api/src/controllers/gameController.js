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
  plataforms,
  image,
  launchDate,
  rating
) => {
  const newGame = await Videogames.create({
    name,
    description,
    plataforms,
    image,
    launchDate,
    rating,
  });
  return newGame;
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
  const apiGamesS = (await axios.get(URL)).data.results;
  const apiGames = cleanArray(apiGamesS);

  let filteredApi = apiGames.filter((element) =>
    element.name.toLowerCase().includes(name)
  );
  // console.log(filteredApi);
  // unificar ambas

  return [...filteredApi, ...bddGames];
};

// Get/Genres
const findGenres = async () => {
  const response = (
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  ).data.results;
  const allGenres = [];
  for (let i = 0; i < response.length; i++) {
    const newGenres = Genres.findOrCreate({
      where: { name: response[i].name },
    });
    allGenres.push(response[i].name);
  }
  return allGenres;
};

module.exports = {
  createVideogame,
  findGenres,
  findByIdVideogame,
  searchGameByname,
  getAllGame,
};
