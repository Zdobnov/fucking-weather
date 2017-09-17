import * as actionTypes from '../constants/actionTypes';

const initialState = {
  current: {}
};

export default function currentWeather(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_WEATHER: {
      return {
        ...state,
        current: action.current
      };
    }
    default: {
      return state;
    }
  }
}
