import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as MealActions from './main/actions/index';
import Header from '../components/header';
import Temperature from './main/components/temperature';
import Location from './main/components/location';
import Details from './main/components/details';
import Description from './main/components/description';

export class Main extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.props.actions.increase();
  }

  handleDecrease() {
    this.props.actions.decrease();
  }

  render() {
    return (
      <div>
        <Header/>
        <main className="app-main today">
          <section className="weather-today">
            <div className="weather-today__flex--left">
              {this.props.value}
              <Temperature/>
              <Location
                location="Minsk, BY"
                />
            </div>
            <div className="weather-today__flex--right">
              icon
              <span
                onClick={this.handleIncrease}
                >+</span>
              <span
                onClick={this.handleDecrease}
                >-</span>
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
    value: state.todoApp.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(MealActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
