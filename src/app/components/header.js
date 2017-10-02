import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Header extends Component {
  static propTypes = {
    onSwitchUnits: PropTypes.func.isRequired
  }

  static defaultPropsTypes = {
    onSwitchUnits: () => {}
  }

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
        <div className="app-header__wrapper">
          <h1 className="app-header__title">FuckingWeather</h1>
          <div
            className="app-header__button"
            onClick={this.handleClick}
            >
            <span/>
          </div>
          <ul className="header-menu">
            <li
              className="header-menu__item"
              onClick={this.props.onSwitchUnits('metric')}
              >
              METRIC
            </li>
            <li
              className="header-menu__item"
              onClick={this.props.onSwitchUnits('imperial')}
              >
              IMPERIAL
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
