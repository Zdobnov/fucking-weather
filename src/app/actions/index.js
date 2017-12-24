import axios from 'axios';

import * as type from '../constants/actionTypes';
import toCamelCase from '../utils/toCamelCase';

export function getCurrentWeather() {
  return async dispatch => {
    try {
      const key = 'a4244d101b7a43e6987175904171009';
      const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Paris`;
      const response = await axios.get(link);

      dispatch({
        type: type.UPDATE_CURRENT_WEATHER,
        data: toCamelCase(response.data)
      });
    } catch (error) {
      throw error;
    }
  };
}

// units === 'metric' || 'imperial'
export function switchUnits(units) {
  return dispatch => {
    dispatch({type: type.SWITCH_UNITS, units});
  };
}

// temperatureUnits === 'c' || 'f'
export function switchTemperatureUnits(temperatureUnits) {
  return dispatch => {
    dispatch({type: type.SWITCH_TEMPERATURE_UNITS, temperatureUnits});
  };
}

// pressureUnits === 'mm' || 'in' || 'mb'
export function switchPressureUnits(pressureUnits) {
  return dispatch => {
    dispatch({type: type.SWITCH_PRESSURE_UNITS, pressureUnits});
  };
}
