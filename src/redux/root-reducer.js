import { combineReducers } from "redux";

import charactersReducer from "./characters/characters.reducer";

export default combineReducers({
  characters: charactersReducer,
});
