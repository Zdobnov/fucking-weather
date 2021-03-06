import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
  static propTypes = {
    weather: PropTypes.object.isRequired,
    measureUnits: PropTypes.object.isRequired
  }

  static defaultProps: {
    weather: {},
    measureUnits: {}
  }

  renderFeelsLike() {
    return this.props.measureUnits.temperatureUnits === 'c' ?
      `${Math.round(this.props.weather.feelslikeC) || 0} C` :
      `${Math.round(this.props.weather.feelslikeF) || 0} F`;
  }

  renderPressure() {
    switch (this.props.measureUnits.pressureUnits) {
      case 'in': {
        return `${Math.round(this.props.weather.pressureIn) || 0} inHg`;
      }
      case 'mb': {
        return `${Math.round(this.props.weather.pressureMb) || 0} mBar`;
      }
      default: {
        return `${(Math.round(this.props.weather.pressureIn) || 0) * 25.4} mmHg`;
      }
    }
  }

  renderPrecipitation() {
    return this.props.measureUnits.system === 'metric' ?
      `${this.props.weather.precipMm || 0} mm` :
      `${this.props.weather.precipIn || 0} in`;
  }

  renderVisibility() {
    return this.props.measureUnits.system === 'metric' ?
      `${this.props.weather.visKm || 0} km` :
      `${this.props.weather.visMiles || 0} mi`;
  }

  renderWindSpeed() {
    return this.props.measureUnits.system === 'metric' ?
      `${this.props.weather.windKph || 0} km/h` :
      `${this.props.weather.windMph || 0} mph`;
  }

  render() {
    const {weather} = this.props;
    const style = {transform: `rotate(${this.props.weather.windDegree}deg)`};

    return (
      <section className="details">
        <p>Clouds: <span>{weather.cloud || 0} %</span></p>
        <p>Feels like: <span>{this.renderFeelsLike()}</span></p>
        <p>Humidity: <span>{weather.humidity || 0} %</span></p>
        <p>Pressure: <span>{this.renderPressure()}</span></p>
        <p>Precipitation: <span>{this.renderPrecipitation()}</span></p>
        <p>Average visibility: <span>{this.renderVisibility()}</span></p>
        <p>Wind speed: <span>{this.renderWindSpeed()}</span></p>
        <p>Wind direction: <span className="details__wind" style={style}/> <span>{this.props.weather.windDir}</span></p>
      </section>
    );
  }
}
