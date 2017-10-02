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

  render() {
    const {units} = this.props.measureUnits;

    return (
      <div>
        <Header
          onSwitchUnits={this.handleSwitchUnits}
          />
        <main className="app-main today">
          <section className="weather-today">
            <div className="weather-today__flex--left">
              <Temperature
                temperature="188"
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
            units={units}
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
