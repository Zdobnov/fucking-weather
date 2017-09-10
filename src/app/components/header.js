import React, {Component} from 'react';
import classNames from 'classnames';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      opened: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <header
        className={classNames('app-header', {
          'app-header--opened': this.state.opened
        })}
        >
        <h1 className="app-header__title">FuckingWeather</h1>
        <div
          className="app-header__button"
          onClick={this.handleClick}
          >
          <span/>
        </div>
      </header>
    );
  }
}
