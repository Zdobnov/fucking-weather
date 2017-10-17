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

  renderPrecipitation() {
    return this.props.measureUnits.units === 'metric' ?
      `${this.props.weather.precipMm || 0} mm` :
      `${this.props.weather.precipIn || 0} in`;
  }

  renderVisibility() {
    return this.props.measureUnits.units === 'metric' ?
      `${this.props.weather.visKm || 0} km` :
      `${this.props.weather.visMiles || 0} mi`;
  }

  renderWindSpeed() {
    return this.props.measureUnits.units === 'metric' ?
      `${this.props.weather.windKph || 0} km/h` :
      `${this.props.weather.windMph || 0} mph`;
  }

  render() {
    const {weather} = this.props;

    return (
      <section className="details">
        <p>Clouds: <span>{weather.cloud || 0} %</span></p>
        <p>Feels like: <span>{this.renderFeelsLike()}</span></p>
        <p>Humidity: <span>{weather.humidity || 0} %</span></p>
        <p>Pressure: <span>pressure_in or pressure_mb</span></p>
        <p>Precipitation: <span>{this.renderPrecipitation()}</span></p>
        <p>Average visibility: <span>{this.renderVisibility()}</span></p>
        <p>Wind speed: <span>{this.renderWindSpeed()}</span></p>
        <p>Wind direction: <span>{this.props.weather.wind_degree}</span></p>
      </section>
    );
  }
}
