import * as actionTypes from './actionTypes';

export const attemptGetPlanets = (payload) => ({
  type: actionTypes.ATTEMPT_GET_PLANETS,
  payload,
});

export const getPlanetsSuccess = (payload) => ({
  type: actionTypes.GET_PLANETS_SUCCESS,
  payload,
});

export const getPlanetsFailure = (payload) => ({
  type: actionTypes.GET_PLANETS_SUCCESS,
  payload,
});
