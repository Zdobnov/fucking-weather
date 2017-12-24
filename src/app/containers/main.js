import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as AppActions from './../actions/index';
import Header from '../components/header';
import Temperature from './main/components/temperature';
import Location from './main/components/location';
import Details from './main/components/details';
import Description from './main/components/description';

export class Main extends Component {
  static propTypes = {
    current: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    measureUnits: PropTypes.object.isRequired
  }

  static defaultProps = {
    current: {},
    location: {},
    actions: {},
    measureUnits: {}
  }

  constructor(props, context) {
    super(props, context);

    this.handleCall = this.handleCall.bind(this);
    this.handleSwitchSystem = this.handleSwitchSystem.bind(this);
    this.handleSwitchTemperatureUnits = this.handleSwitchTemperatureUnits.bind(this);
    this.handleSwitchPressureUnits = this.handleSwitchPressureUnits.bind(this);
  }

  componentDidMount() {
    try {
      this.getPosition()
        .then(({coords}) => {
          this.props.actions.getCurrentWeather(coords);
        })
        .catch(err => {
          // request error
          console.log(err);
        });
    } catch (err) {
      // location error
      console.log(err);
    }
  }

  handleCall() {
    this.props.actions.getCurrentWeather();
  }

  // system === 'metric' || 'imperial'
  handleSwitchSystem(system) {
    return () => {
      this.props.actions.switchSystem(system);
    };
  }

  // temperatureUnits === 'c' || 'f'
  handleSwitchTemperatureUnits(temperatureUnits) {
    return () => {
      this.props.actions.switchTemperatureUnits(temperatureUnits);
    };
  }

  // pressureUnits === 'mm' || 'in' || 'mb'
  handleSwitchPressureUnits(pressureUnits) {
    return () => {
      this.props.actions.switchPressureUnits(pressureUnits);
    };
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  render() {
    return (
      <div>
        <Header
          onSwitchSystem={this.handleSwitchSystem}
          onSwitchTemperatureUnits={this.handleSwitchTemperatureUnits}
          onSwitchPressureUnits={this.handleSwitchPressureUnits}
          />
        <main className="app-main today">
          <section className="weather-today">
            <div className="weather-today__flex--left">
              <Temperature
                weather={this.props.current}
                measureUnits={this.props.measureUnits}
                onSwitchTemperatureUnits={this.handleSwitchTemperatureUnits}
                />
              <Location
                location={this.props.location}
                />
            </div>
            <div className="weather-today__flex--right">
              icon
              --- HERE ---
              icon
            </div>
          </section>
          <Details
            weather={this.props.current}
            measureUnits={this.props.measureUnits}
            />
          <Description/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.currentWeather.current,
    location: state.currentWeather.location,
    measureUnits: state.measureUnits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
