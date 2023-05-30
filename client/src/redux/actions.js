import axios from "axios";
import { GET_BY_ID, GET_GENRES, GET_VIDEOGAMES } from "./actionsTypes";

export const getVideoGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      "http://localhost:3001/videogames"
      // "https://api.rawg.io/api/games?key=ac2447209480475f9cbcb4d85b234926"
    );
    const games = apiData.data;
    // console.log(games);
    dispatch({ type: GET_VIDEOGAMES, payload: games });
  };
};

//// axios.get("http://localhost:3001/videogames/")

// Get del detalle del juego cliqueado

export const getGenres = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/genres`);
    const game = apiData.data;
    dispatch({ type: GET_GENRES, payload: game });
  };
};

export const getById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    const detailGame = apiData.data;
    console.log(apiData);
    dispatch({ type: GET_BY_ID, payload: detailGame });
  };
};
