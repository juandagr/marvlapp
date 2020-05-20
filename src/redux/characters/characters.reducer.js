import CharactersTypes from "./characters.types";

const INITIAL_STATE = {
  characters: [],
  activePage: 1,
  charactersPerPage: 24,
  totalCharacters: 0,
  error: null,
  isCharactersFetching: false,
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.GET_CHARACTERS_START:
      return {
        ...state,
        characters: [],
        isCharactersFetching: true,
      };
    case CharactersTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload.characters,
        totalCharacters: action.payload.totalCharacters,
        activePage: action.payload.activePage,
        isCharactersFetching: false,
      };
    case CharactersTypes.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCharactersFetching: false,
      };
    default:
      return state;
  }
};

export default charactersReducer;
