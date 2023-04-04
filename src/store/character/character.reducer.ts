import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./character.actionTypes"

import { CharacterActions, CharacterState } from "./character.types"

const INITIALSTATE: CharacterState = {
  data: {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: [],
  },
  loading: false,
  error: null,

}

const characterReducer = (state = INITIALSTATE, action: CharacterActions) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default characterReducer
