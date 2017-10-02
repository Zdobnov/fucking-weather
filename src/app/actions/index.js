import axios from 'axios';
import * as type from '../constants/actionTypes';

export function getCurrentWeather() {
  return async dispatch => {
    try {
      const key = 'a4244d101b7a43e6987175904171009';
      const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Paris`;
      const response = await axios.get(link);
      console.log(response.data);

      dispatch({
        type: type.UPDATE_CURRENT_WEATHER,
        data: response.data
      });
    } catch (error) {
      // console.log('getCurrentWeather - error');
      throw error;
    }
  };
}

export function setMetricUnits() {
  return dispatch => {
    dispatch({type: type.SET_METRIC_UNITS});
  };
}

export function setImperialUnits() {
  return dispatch => {
    dispatch({type: type.SET_IMPERIAL_UNITS});
  };
}
