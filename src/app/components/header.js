import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-header__title">FuckingWeather</h1>
        <div className="app-header__button">
          <span/>
        </div>
      </header>
    );
  }
}
