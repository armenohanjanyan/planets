import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user/reducer';
import planetReducer from './planet/reducer';
import planetsReducer from './planets/reducer';

const createRootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    planet: planetReducer,
    planets: planetsReducer,
  });

export default createRootReducers;
