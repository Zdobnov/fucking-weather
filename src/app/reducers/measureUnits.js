import {
  SWITCH_UNITS,
  SWITCH_TEMPERATURE_UNITS
} from '../constants/actionTypes';

const initialState = {
  units: 'metric',
  temperatureUnits: 'c'
};

export default function measureUnits(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_UNITS: {
      return {
        ...state,
        units: action.units
      };
    }

    case SWITCH_TEMPERATURE_UNITS: {
      return {
        ...state,
        temperatureUnits: action.temperatureUnits
      };
    }

    default: {
      return state;
    }
  }
}
