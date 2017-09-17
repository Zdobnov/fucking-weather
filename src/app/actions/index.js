import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export function getCurrentWeather() {
  return async dispatch => {
    try {
      const key = 'a4244d101b7a43e6987175904171009';
      const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Paris`;
      const response = await axios.post(link);

      dispatch({
        type: actionTypes.UPDATE_CURRENT_WEATHER,
        data: response.data
      });
    } catch (error) {
      // console.log('getCurrentWeather - error');
      throw error;
    }
  };
}
