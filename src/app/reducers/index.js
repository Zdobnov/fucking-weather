import {combineReducers} from 'redux';

import currentWeather from './currentWeather';

export const rootReducer = combineReducers({
  currentWeather
});
