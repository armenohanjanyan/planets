import { ATTEMPT_GET_PLANETS, GET_PLANETS_SUCCESS, GET_PLANETS_FAILURE } from './actionTypes';

const INITIAL_STATE = {
  next: null,
  previous: null,
  count: 0,
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ATTEMPT_GET_PLANETS:
      return {
        ...state,
        loading: true,
      };
    case GET_PLANETS_FAILURE:
      return {
        ...state,
        error: action.message,
        loading: false,
      };
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
