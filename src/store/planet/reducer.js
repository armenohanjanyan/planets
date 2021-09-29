import * as actionTypes from './actionTypes';

const initialState = {
  planet: null,
  planetLoading: true,
  planetError: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ATTEMPT_GET_PLANET:
      return {
        ...state,
        planetLoading: true,
        planetError: null,
      };
    case actionTypes.GET_PLANET_SUCCESS:
      return {
        ...state,
        planetLoading: false,
        planet: payload,
        planetError: null,
      };
    case actionTypes.GET_PLANET_FAILURE:
      return {
        ...state,
        planetLoading: false,
        planet: null,
        planetError: payload,
      };
    default:
      return state;
  }
};

export default reducer;
