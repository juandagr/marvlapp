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

export const selectIsCharactersFetching = createSelector(
  [selectCharacters],
  (charactersState) => charactersState.isCharactersFetching
);

export const selectCharactersLoading = createSelector(
  [selectCharacters],
  (charactersState) => (charactersState.characters.length === 0 ? true : false)
);
