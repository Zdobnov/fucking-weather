import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {rootReducer} from './app/reducers/index';
import Main from './app/containers/main';

// STYLES
import './index.scss';

// STORE
const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
