import * as types from '../consts/types';

const initialState = {
  accessToken: null,
};

const accessTokenReducer = (state = initialState, action) => {
  if (action.type === types.FETCH_ACCESS_TOKEN) {
    return {
      ...state,
      accessToken: action.payload,
    };
  } else {
    return state;
  }
};
