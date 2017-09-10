const initialState = {
  value: 100
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE': {
      return Object.assign(
        {},
        state,
        {
          value: state.value + 1
        }
      );
    }
    case 'DECREASE': {
      return Object.assign(
        {},
        state,
        {
          value: state.value - 1
        }
      );
    }
    default: {
      return state;
    }
  }
}
