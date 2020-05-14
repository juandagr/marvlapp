import { all, call } from "redux-saga/effects";
import { charactersSagas } from "./characters/characters.sagas";

export default function* rootSaga() {
  yield all([call(charactersSagas)]);
}
