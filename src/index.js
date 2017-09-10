import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from './app/reducers/index';
import Main from './app/containers/main';

// STYLES
import './index.scss';

// STORE
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
