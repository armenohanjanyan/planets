import * as actionTypes from './actionTypes';

export const attemptGetPlanet = (payload) => ({ type: actionTypes.ATTEMPT_GET_PLANET, payload });
export const getPlanetSuccess = (payload) => ({ type: actionTypes.GET_PLANET_SUCCESS, payload });
export const getPlanetFailure = (payload) => ({ type: actionTypes.GET_PLANET_FAILURE, payload });
