import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"

import rootReducer, { RootState } from "./rootReducer"
import { rootSaga } from "./rootSaga"


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
})

// Run the saga
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
