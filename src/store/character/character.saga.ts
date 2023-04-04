import { call, put, takeLatest } from "redux-saga/effects"
import { FETCH_CHARACTERS } from "./character.actionTypes"
import {
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from "./character.actions"
import {
  CharacterActions,
  BodyCharacter,
  ParamsCharacter,
} from "./character.types"
import { getCharactersApi } from "../../api/character"

interface GetCharacterAction {
  type: CharacterActions
  payload: ParamsCharacter
}

function* fetchUsersSaga(action: GetCharacterAction) {
  try {
    const params = action.payload
    let fetchAPI
    if (params) {
      fetchAPI = call(getCharactersApi, params)
    } else {
      fetchAPI = call(getCharactersApi)
    }
    const { data } = yield fetchAPI
    yield put(fetchCharactersSuccess(data as BodyCharacter))
  } catch (error: any) {
    yield put(fetchCharactersFailure(error.response.data))
  }
}

function* characterSaga() {
  yield takeLatest(FETCH_CHARACTERS, fetchUsersSaga)
}

export default characterSaga
