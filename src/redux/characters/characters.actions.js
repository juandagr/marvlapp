import CharactersTypes from "./characters.types";

export const getCharactersStart = (params) => ({
  type: CharactersTypes.GET_CHARACTERS_START,
  payload: params,
});

export const getCharactersSuccess = (data) => ({
  type: CharactersTypes.GET_CHARACTERS_SUCCESS,
  payload: data,
});

export const getCharactersFailure = (error) => ({
  type: CharactersTypes.GET_CHARACTERS_FAILURE,
  payload: error,
});
