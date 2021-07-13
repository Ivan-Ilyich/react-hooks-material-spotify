import { combineReducers } from 'redux';
import accessTokenReducer from './spotifyTokenReducer';

const rootReducer = combineReducers({
  accessToken: accessTokenReducer,
});

export const rootReducer;
