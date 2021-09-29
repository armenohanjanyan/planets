import { ATTEMPT_GET_PLANETS } from './actionTypes';

import { call, put, takeLatest } from 'redux-saga/effects';
import PlanetApi from '../../api/planetsApi';
import { getPlanetsFailure, getPlanetsSuccess } from './actions';

function* fetchPlanets({ payload }) {
  console.log(payload, 'dsadadad');
  try {
    const data = yield call(PlanetApi.getPlanets, payload);
    yield put(getPlanetsSuccess(data.data));
  } catch (e) {
    yield put(getPlanetsFailure(e.message));
  }
}

function* watchPlanets() {
  yield takeLatest(ATTEMPT_GET_PLANETS, fetchPlanets);
}

export default watchPlanets;
