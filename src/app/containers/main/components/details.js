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
      `${this.props.weather.feelslikeC} C` :
      `${this.props.weather.feelslikeF} F`;
  }

  renderVisibility() {
    return this.props.measureUnits.units === 'metric' ?
      `${this.props.weather.visKm} km` :
      `${this.props.weather.visMiles} mi`;
  }

  renderWindSpeed() {
    return this.props.measureUnits.units === 'metric' ?
      `${this.props.weather.windKph} km/h` :
      `${this.props.weather.windMph} mph`;
  }

  render() {
    const {weather} = this.props;

    return (
      <section className="details">
        <p>Clouds: <span>{weather.cloud} %</span></p>
        <p>Feels like: <span>{this.renderFeelsLike()}</span></p>
        <p>Humidity: <span>{weather.humidity} %</span></p>
        <p>Pressure: <span>pressure_in or pressure_mb</span></p>
        <p>Average visibility: <span>{this.renderVisibility()}</span></p>
        <p>Wind speed: <span>{this.renderWindSpeed()}</span></p>
        <p>Wind direction: <span>{this.props.weather.wind_degree}</span></p>
      </section>
    );
  }
}
