import * as types from '../consts/types';

const initialState = {
  accessToken: null,
  isLoading: false,
  error: null,
};

const accessTokenReducer = (state = initialState, action = { type: null }) => {
  console.log(
    '🚀 ~ file: accessTokenReducer.js ~ line 10 ~ accessTokenReducer ~ action',
    action,
  );
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

export default accessTokenReducer;
