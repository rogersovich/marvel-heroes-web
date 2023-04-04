import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./character.actionTypes";

import {
  CharacterActions,
  BodyCharacter,
  ParamsCharacter
} from "./character.types"


export const fetchCharacters = (params?: ParamsCharacter): CharacterActions => ({
  type: FETCH_CHARACTERS,
  payload: params
});

export const fetchCharactersSuccess = (body: BodyCharacter): CharacterActions => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: body,
});

export const fetchCharactersFailure = (error: Error): CharacterActions => ({
  type: FETCH_CHARACTERS_FAILURE,
  error,
});