import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default reducer;
