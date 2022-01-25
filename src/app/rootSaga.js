import { all } from "redux-saga/effects";
import { fetchMovieWatcher } from "../modules/Movie/saga/movieSaga";

export default function* rootSaga() {
  yield all([fetchMovieWatcher()]);
}
