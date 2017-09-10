import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Main from './app/containers/main';

import './index.scss';

// initial state
const initialState = {
  value: 100
};

// reducer
function todoApp(state = initialState, action) {
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

// store
const rootReducer = combineReducers({
  todoApp
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
