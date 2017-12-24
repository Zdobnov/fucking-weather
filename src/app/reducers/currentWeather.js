import * as actionTypes from '../constants/actionTypes';

const initialState = {
  current: {},
  location: {}
};

export default function currentWeather(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_WEATHER: {
      return {
        ...state,
        ...action.data
      };
    }

    default: {
      return state;
    }
  }
}
