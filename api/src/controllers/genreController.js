const axios = require("axios");
const { API_KEY } = process.env;
const { Genres } = require("../db");

const findGenres = async () => {
  const response = (
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  ).data.results;
  let allGenres = [];
  for (let i = 0; i < response.length; i++) {
    await Genres.findOrCreate({
      where: { id: response[i].id, name: response[i].name },
    });
  }

  allGenres = await Genres.findAll();
  return allGenres;
};

module.exports = { findGenres };
