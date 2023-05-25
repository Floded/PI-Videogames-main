import axios from "axios";
import { GET_BY_ID, GET_VIDEOGAMES } from "./actionsTypes";

export const getVideoGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      "http://localhost:3001/videogames"
      // "https://api.rawg.io/api/games?key=ac2447209480475f9cbcb4d85b234926"
    );
    const games = apiData.data;
    console.log(games);
    dispatch({ type: GET_VIDEOGAMES, payload: games });
  };
};

//// axios.get("http://localhost:3001/videogames/")

// Get del detalle del juego cliqueado
// export const getGameDetail = (id) => {
//   return async function () {
//     const apiData = await axios.get(
//       `https://api.rawg.io/api/games/${id}?key=ac2447209480475f9cbcb4d85b234926`
//     );
//     const game = apiData.data;
//     dispatch({ type: GET_BY_ID, payload: game });
//   };
// };
