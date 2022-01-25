import { takeLatest, put, call } from "redux-saga/effects";
import dataApi from "../api/dataApi";

function createApiRequestWorker(actions) {
  return function* worker({ payload }) {
    const { start, success, error } = actions;
    yield put(start());

    try {
      const response = yield call(dataApi.get, "/", { params: payload });
      yield put(success(response.data));
    } catch (e) {
      yield put(error(e));
    }
  };
}

export default function createApiRequestWatcher(actions) {
  const { init } = actions;
  return function* watcher() {
    yield takeLatest(init, createApiRequestWorker(actions));
  };
}
