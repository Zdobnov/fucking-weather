import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class Details extends Component {
  render() {
    return (
      <section className="details">
        <p><span>Wind</span>: 5m/s</p>
        <p><span>Clouds</span>: 90%</p>
        <p><span>Humidity</span>: 100%</p>
        <p><span>Pressure</span>: 1000 hpa</p>
        <p><span/>750.1 mm Hg</p>
      </section>
    );
  }
}
