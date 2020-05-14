import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "./characters.types";

import {
  getCharactersSuccess,
  getCharactersFailure,
} from "./characters.actions";
import { getCharacters } from "../../marvel-api/characters";

export function* getCharactersFromAPI({
  payload: { charactersPerPage, pageNumber },
}) {
  try {
    const charactersCall = getCharacters([
      { key: "limit", value: charactersPerPage },
      {
        key: "offset",
        value: `${(pageNumber - 1) * charactersPerPage}`,
      },
    ]);

    const charactersdata = yield fetch(charactersCall)
      .then((response) => response.json())
      .then((response) => response.data);

    yield put(
      getCharactersSuccess({
        characters: charactersdata.results,
        totalCharacters: charactersdata.total,
        activePage: pageNumber,
      })
    );
  } catch (error) {
    put(call(getCharactersFailure(error)));
  }
}

export function* onGetCharactersStart() {
  yield takeLatest(UserActionTypes.GET_CHARACTERS_START, getCharactersFromAPI);
}

export function* charactersSagas() {
  yield all([call(onGetCharactersStart)]);
}
