import {combineReducers} from 'redux';

import currentWeather from './currentWeather';
import measureUnits from './measureUnits';

export const rootReducer = combineReducers({
  currentWeather,
  measureUnits
});
