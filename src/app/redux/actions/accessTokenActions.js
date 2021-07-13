import { getAccessToken } from '../../utils/spotifyAuth';
import * as types from '../consts/types';

export const fetchAccessTokenRequest = () => ({
  type: types.FETCH_ACCESS_TOKEN,
});

export const fetchAccessTokenSuccess = (data) => ({
  type: types.FETCH_ACCESS_TOKEN_SUCCESS,
  payload: {
    data,
  },
});

export const fetchAccessTokenError = (error) => ({
  type: types.FETCH_ACCESS_TOKEN_ERROR,
  payload: {
    error,
  },
});

export const fetchAccessToken = () => async (dispatch) => {
  dispatch(fetchAccessTokenRequest());
  try {
    const response = await getAccessToken();
    if (!response) {
      throw Error();
    }
    return dispatch(fetchAccessTokenSuccess(response.data));
  } catch (err) {
    return dispatch(fetchAccessTokenError(err.response.data));
  }
};
