const initialState = {
  value: 100
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE': {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case 'DECREASE': {
      return {
        ...state,
        value: state.value - 1
      };
    }
    default: {
      return state;
    }
  }
}
