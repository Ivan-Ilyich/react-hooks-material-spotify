import * as types from '../consts/types';

const initialState = {
  accessToken: null,
};

const accessTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ACCESS_TOKEN:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.access_token,
      };
    case types.FETCH_ACCESS_TOKEN_ERROR:
      return {
        ...state,
        accessToken: null,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
