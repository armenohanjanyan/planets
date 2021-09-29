import { all } from 'redux-saga/effects';

import planetSaga from './planet/saga';
import planetsSaga from './planets/saga';

export default function* rootSaga() {
  yield all([planetSaga(), planetsSaga()]);
}
