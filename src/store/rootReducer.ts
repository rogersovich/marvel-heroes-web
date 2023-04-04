import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "./auth/reducer"
import characterReducer from "./character/character.reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  character: characterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
