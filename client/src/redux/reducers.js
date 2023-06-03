import {
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_BY_ID,
  GET_BY_NAME,
  // CREATE_VIDEOGAME,
} from "./actionsTypes";

const initialState = {
  videoGames: [],
  game: [],
  gameDetail: [],
  newGame: [],
  nameGame: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_VIDEOGAMES:
      return { ...state, videoGames: actions.payload };
    case GET_GENRES:
      return { ...state, game: actions.payload };
    case GET_BY_ID:
      return { ...state, gameDetail: actions.payload };
    case GET_BY_NAME:
      return { ...state, nameGame: actions.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
