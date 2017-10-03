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
    this.handleSwitchUnits = this.handleSwitchUnits.bind(this);
    this.handleSwitchTemperatureUnits = this.handleSwitchTemperatureUnits.bind(this);
  }

  handleCall() {
    this.props.actions.getCurrentWeather();
  }

  handleSwitchUnits(units) {
    // units === 'metric' || 'imperial'
    return () => {
      this.props.actions.switchUnits(units);
    };
  }

  handleSwitchTemperatureUnits(temperatureUnits) {
    // temperatureUnits === 'c' || 'f'
    return () => {
      this.props.actions.switchTemperatureUnits(temperatureUnits);
    };
  }

  render() {
    return (
      <div>
        <Header
          onSwitchUnits={this.handleSwitchUnits}
          onSwitchTemperatureUnits={this.handleSwitchTemperatureUnits}
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
              <span
                onClick={this.handleCall}
                >ASK FOR WEATHER</span>
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
