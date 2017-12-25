import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Temperature extends Component {
  static propTypes = {
    weather: PropTypes.object.isRequired,
    measureUnits: PropTypes.object.isRequired,
    onSwitchTemperatureUnits: PropTypes.func.isRequired
  }

  static defaultProps: {
    weather: {},
    measureUnits: {},
    onSwitchTemperatureUnits: () => {}
  }

  renderTemperature() {
    return this.props.measureUnits.temperatureUnits === 'c' ?
      `${Math.round(this.props.weather.tempC) || 0}` :
      `${Math.round(this.props.weather.tempF) || 0}`;
  }

  render() {
    return (
      <div className="temperature">
        <div className="temperature__value">{this.renderTemperature()}</div>
        <div className="temperature__units">
          <div
            className={classNames({
              active: this.props.measureUnits.temperatureUnits === 'c'
            })}
            onClick={this.props.onSwitchTemperatureUnits('c')}
            >
            C<sup>o</sup>
          </div>
          <div
            className={classNames({
              active: this.props.measureUnits.temperatureUnits === 'f'
            })}
            onClick={this.props.onSwitchTemperatureUnits('f')}
            >F<sup>o</sup>
          </div>
        </div>
      </div>
    );
  }
}
