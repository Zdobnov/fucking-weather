import {
  SWITCH_UNITS
} from '../constants/actionTypes';

const initialState = {
  units: 'metric'
};

export default function measureUnits(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_UNITS: {
      return {
        ...state,
        units: action.units
      };
    }

    default: {
      return state;
    }
  }
}
