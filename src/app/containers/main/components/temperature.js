import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Temperature extends Component {
  static propTypes = {
    temperature: PropTypes.string.isRequired
  }

  static defaultProps: {
    temperature: ''
  }

  render() {
    // temp_c or temp_f
    return (
      <div className="temperature">
        <div className="temperature__value">{this.props.temperature}</div>
        <div className="temperature__units">
          <div>C<sup>o</sup></div>
          <div>F<sup>o</sup></div>
        </div>
      </div>
    );
  }
}
