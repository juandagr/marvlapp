import { createSelector } from "reselect";

const selectCharacters = (state) => state.characters;

export const selectCurrentCharacters = createSelector(
  [selectCharacters],
  (charactersState) => charactersState.characters
);

export const selectActivePage = createSelector(
  [selectCharacters],
  (charactersState) => charactersState.activePage
);

export const selectTotalCharacters = createSelector(
  [selectCharacters],
  (charactersState) => charactersState.totalCharacters
);

export const selectCharactersPerPage = createSelector(
  [selectCharacters],
  (charactersState) => charactersState.charactersPerPage
);
