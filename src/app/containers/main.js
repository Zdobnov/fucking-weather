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
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.handleCall = this.handleCall.bind(this);
  }

  handleCall() {
    this.props.actions.getCurrentWeather();
  }

  render() {
    return (
      <div>
        <Header/>
        <main className="app-main today">
          <section className="weather-today">
            <div className="weather-today__flex--left">
              {this.props.current.temp_c}
              <Temperature/>
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
          <Details/>
          <Description/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.currentWeather.current,
    location: state.currentWeather.location
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
