import { combineReducers } from 'redux';
import accessTokenReducer from './accessTokenReducer';

const rootReducer = combineReducers({
  accessToken: accessTokenReducer,
});

export default rootReducer;
