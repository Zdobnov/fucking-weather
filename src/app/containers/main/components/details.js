import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
  static propTypes = {
    weather: PropTypes.object.isRequired,
    units: PropTypes.string.isRequired
  }

  static defaultProps: {
    weather: {},
    units: 'metric'
  }

  constructor(props, context) {
    super(props, context);

    this.renderVisibility = this.renderVisibility.bind(this);
  }

  renderVisibility() {
    return this.props.units === 'metric' ?
      `${this.props.weather.vis_km} km` :
      `${this.props.weather.vis_miles} mi`;
  }

  renderWindSpeed() {
    return this.props.units === 'metric' ?
      `${this.props.weather.wind_kph} km/h` :
      `${this.props.weather.wind_mph} mph`;
  }

  render() {
    const {weather} = this.props;

    return (
      <section className="details">
        <p>Clouds: <span>{weather.cloud}%</span></p>
        <p>Feels like: <span>feelslike_c or feelslike_f</span></p>
        <p>Humidity: <span>{weather.humidity}%</span></p>
        <p>Pressure:: <span>pressure_in or pressure_mb</span></p>
        <p>Average visibility: <span>{this.renderVisibility()}</span></p>
        <p>Wind speed: <span>{this.renderWindSpeed()}</span></p>
        <p>Wind direction: <span>{this.props.weather.wind_degree}</span></p>
      </section>
    );
  }
}
