import {
  SWITCH_SYSTEM,
  SWITCH_TEMPERATURE_UNITS,
  SWITCH_PRESSURE_UNITS
} from '../constants/actionTypes';

const initialState = {
  system: 'metric',
  temperatureUnits: 'c',
  pressureUnits: 'mm'
};

export default function measureUnits(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_SYSTEM: {
      return {
        ...state,
        system: action.system
      };
    }

    case SWITCH_TEMPERATURE_UNITS: {
      return {
        ...state,
        temperatureUnits: action.temperatureUnits
      };
    }

    case SWITCH_PRESSURE_UNITS: {
      return {
        ...state,
        pressureUnits: action.pressureUnits
      };
    }

    default: {
      return state;
    }
  }
}
