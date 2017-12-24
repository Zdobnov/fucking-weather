import {
  SWITCH_UNITS,
  SWITCH_TEMPERATURE_UNITS,
  SWITCH_PRESSURE_UNITS
} from '../constants/actionTypes';

const initialState = {
  units: 'metric',
  temperatureUnits: 'c',
  pressureUnits: 'mm'
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
