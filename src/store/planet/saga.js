import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import PlanetsApi from '../../api/planetsApi';
import { getPlanetFailure, getPlanetSuccess } from './actions';
import * as actionTypes from './actionTypes';

function* watchGetPlanet() {
  yield takeEvery(actionTypes.ATTEMPT_GET_PLANET, getPlanet);
}

function* getPlanet({ payload }) {
  try {
    const res = yield call(PlanetsApi.getPlanet, payload);
    yield put(getPlanetSuccess(res.data));
  } catch (error) {
    yield put(getPlanetFailure(error.message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetPlanet)]);
}
