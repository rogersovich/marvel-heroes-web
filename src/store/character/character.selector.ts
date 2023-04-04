import { createSelector } from "reselect"

import { RootState } from "../rootReducer"
import { CharacterState } from "./character.types";

const getCharactersState = (state: RootState) => state.character;

export const getCharactersLoading = createSelector(
  getCharactersState,
  (state: CharacterState) => state.loading,
);

export const getCharactersData = createSelector(
  getCharactersState,
  (state: CharacterState) => state.data,
);

export const getCharactersError = createSelector(
  getCharactersState,
  (state: CharacterState) => state.error,
);