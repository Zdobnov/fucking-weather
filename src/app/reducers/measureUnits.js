import * as actionTypes from '../constants/actionTypes';

const initialState = {
  units: 'metric'
};

export default function measureUnits(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_METRIC_UNITS: {
      return {
        ...state,
        units: 'metric'
      };
    }

    case actionTypes.SET_IMPERIAL_UNITS: {
      return {
        ...state,
        units: 'imperial'
      };
    }

    default: {
      return state;
    }
  }
}
