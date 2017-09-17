import axios from 'axios';

export function getCurrentWeather() {
  return async dispatch => {
    try {
      const KEY = 'a4244d101b7a43e6987175904171009';
      const LINK = `http://api.apixu.com/v1/current.json?key=${KEY}&q=Paris`;
      await axios.get(LINK).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });

      dispatch({type: 'INCREASE'});
    } catch (error) {
      console.log('getCurrentWeather - error');
      throw error;
    }
  };
}
