require("dotenv").config();
// Aqui vamos a poder trabajar con el Modelo ya creado para la BDD, para ello lo importamos.

const { Videogames } = require("../db");

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
  // const dbbGames = Videogames.findAll({ where: { [op.LIKE]: name } });
  // Buscar por Api
  const apiGamesS = (await axios.get(URL)).data.results;
  const apiGames = cleanArray(apiGamesS);

  const filteredApi = apiGames.filter((element) =>
    element.name.toLowerCase().includes(name)
  );
  // unicicar ambas

  return [...filteredApi, ...bddGames];
};

// Get/Genres
const findGenres = async () => {
  const response = await axios.get(URL);
  const { results } = response.data;

  // let aux = [];

  // return results.forEach((x) => {
  // x.genres.filter((x) => console.log(x.name));
  // aux.push(x.id);
  // });

  // return aux;

  // let newResults = results.filter((element) => {
  //   element.name === "Grand Theft Auto v";
  // });

  // const genresAll = [];
  // for (let i = 0; i < results.length; i++) {
  //   let aux = results[i].genres;
  //   genresAll.push(aux);
  // }
  // return genresAll[1][0].name;
  // results.forEach((element) => {
  //   console.log(element.count);
  // });

  return results;
};

module.exports = {
  createVideogame,
  findGenres,
  findByIdVideogame,
  searchGameByname,
  getAllGame,
};
