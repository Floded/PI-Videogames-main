import axios from "axios";
import {
  GET_BY_ID,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_BY_NAME,
} from "./actionsTypes";

export const getVideoGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const games = apiData.data;
    // console.log(games);
    dispatch({ type: GET_VIDEOGAMES, payload: games });
  };
};

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
    // console.log(apiData);
    dispatch({ type: GET_BY_ID, payload: detailGame });
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const nameGame = apiData.data;
    // console.log(nameGame);
    dispatch({ type: GET_BY_NAME, payload: nameGame });
  };
};
