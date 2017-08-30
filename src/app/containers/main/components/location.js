import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Location extends Component {
  static propTypes = {
    location: PropTypes.string.isRequired
  }

  static defaultProps = {
    location: ''
  }

  render() {
    const {location} = this.props;

    return (
      <div className="location">
        {location}
      </div>
    );
  }
}
