import { GET_BY_ID, GET_VIDEOGAMES } from "./actionsTypes";

const initialState = {
  videoGames: [],
  game: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_VIDEOGAMES:
      return { ...state, videoGames: actions.payload };
    case GET_BY_ID:
      return { ...state, game: actions.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
