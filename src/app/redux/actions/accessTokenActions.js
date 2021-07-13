import { getAccessToken } from '../../utils/spotifyAuth';
import * as types from '../consts/types';

export const fetchAccessTokenRequest = (data) => ({
  type: 'FETCH_ACCESS_TOKEN',
});

export const fetchAccessTokenSuccess = (data) => ({
  type: 'FETCH_ACCESS_TOKEN_SUCCESS',
  payload: {
    data,
  },
})

export const fetchAccessTokenError = (error) => ({
  type: 'FETCH_ACCESS_TOKEN_ERROR',
  payload: {
    error,
  }
})

export const fetchAccessToken = () => async (dispatch) => {
  dispatch(fetchAccessTokenRequest);
  try {
    const response = await getAccessToken();
    if (!response) {
      throw Error();
    }
    return dispatch(fetchAccessTokenSuccess(response.data));
  } catch (
    dispatch(fetchAccessTokenError(err.response.data));
  )
};
