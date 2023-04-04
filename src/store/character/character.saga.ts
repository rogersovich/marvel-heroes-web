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
  Character,
  Thumbnail
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
    const characters: Character[] = data?.results.map((character: any) => {
      const thumbnailChar: Thumbnail = {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension,
      }
      return {
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: thumbnailChar,
        comicsCount: character.comics.available,
        seriesCount: character.series.available,
        storiesCount: character.stories.available,
      }
    })
    const res: BodyCharacter = {
      results: characters,
      offset: data.offset,
      limit: data.limit,
      total: data.total,
      count: data.count,
    }
    yield put(fetchCharactersSuccess(res))
  } catch (error: any) {
    yield put(fetchCharactersFailure(error.response.data))
  }
}

function* characterSaga() {
  yield takeLatest(FETCH_CHARACTERS, fetchUsersSaga)
}

export default characterSaga
