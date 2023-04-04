import { all, fork } from "redux-saga/effects";

import authSaga from "./auth/saga";
import characterSage from "./character/character.saga"

export function* rootSaga() {
  yield all([fork(authSaga), fork(characterSage)]);
}