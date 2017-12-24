import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

export class Header extends Component {
  static propTypes = {
    measureUnits: PropTypes.object.isRequired,
    onSwitchSystem: PropTypes.func.isRequired,
    onSwitchTemperatureUnits: PropTypes.func.isRequired,
    onSwitchPressureUnits: PropTypes.func.isRequired
  }

  static defaultPropsTypes = {
    measureUnits: {},
    onSwitchSystem: () => {},
    onSwitchTemperatureUnits: () => {},
    onSwitchPressureUnits: () => {}
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      opened: false
    };

    this.units = {
      system: [{
        id: 'metric',
        name: 'Metric'
      }, {
        id: 'imperial',
        name: 'Imperial'
      }],
      temperature: [{
        id: 'c',
        name: 'C'
      }, {
        id: 'f',
        name: 'F'
      }],
      pressure: [{
        id: 'mm',
        name: 'mmHg'
      }, {
        id: 'in',
        name: 'inHg'
      }, {
        id: 'mb',
        name: 'mBar'
      }]
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
          <div className="app-header__menu">
            <h3>Pages</h3>
            -- link to pages --
            <h3>Settings</h3>
            <h6>Measure system</h6>
            <ul className="app-header__settings">
              { this.units.system.map(item => (
                <li
                  key={item.id}
                  className={classNames({
                    active: item.id === this.props.measureUnits.system
                  })}
                  onClick={this.props.onSwitchSystem(item.id)}
                  >
                  {item.name}
                </li>
              ))}
            </ul>
            <h6>Temperature units</h6>
            <ul className="app-header__settings">
              { this.units.temperature.map(item => (
                <li
                  key={item.id}
                  className={classNames({
                    active: item.id === this.props.measureUnits.temperatureUnits
                  })}
                  onClick={this.props.onSwitchTemperatureUnits(item.id)}
                  >
                  {item.name}
                </li>
              ))}
            </ul>
            <h6>Pressure units</h6>
            <ul className="app-header__settings">
              { this.units.pressure.map(item => (
                <li
                  key={item.id}
                  className={classNames({
                    active: item.id === this.props.measureUnits.pressureUnits
                  })}
                  onClick={this.props.onSwitchPressureUnits(item.id)}
                  >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    measureUnits: state.measureUnits
  };
};

export default connect(
  mapStateToProps
)(Header);
