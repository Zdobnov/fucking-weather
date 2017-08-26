import React, {Component} from 'react';

import Header from './components/header';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>{'Hello world!'}</h1>
      </div>
    );
  }
}
