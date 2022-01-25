import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import movieReducer from "../modules/Movie/reducer/movieReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
