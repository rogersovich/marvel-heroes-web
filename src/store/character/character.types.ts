import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./character.actionTypes"

export interface Thumbnail {
  path: string
  extension: string
}
export interface Character {
  id: number
  name: string
  description: string
  modified: Date
  thumbnail: Thumbnail
  comicsCount: number
  seriesCount: number
  storiesCount: number
}

export interface BodyCharacter {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}

export interface ParamsCharacter {
  name?: string
  limit?: number
  offset?: number
}

export interface CharacterState {
  data: BodyCharacter
  loading: boolean
  error: Error | null
}

interface FetchCharactersAction {
  type: typeof FETCH_CHARACTERS
  payload: ParamsCharacter | undefined
}

interface FetchCharactersSuccessAction {
  type: typeof FETCH_CHARACTERS_SUCCESS
  payload: BodyCharacter
}

interface FetchCharactersFailureAction {
  type: typeof FETCH_CHARACTERS_FAILURE
  error: Error
}

export type CharacterActions =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction
