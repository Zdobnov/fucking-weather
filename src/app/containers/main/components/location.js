import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Location extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  static defaultProps = {
    location: {}
  }

  render() {
    const {name, region, country} = this.props.location;
    const location = Object.keys(this.props.location).length ?
      `${name}, ${region}, ${country}` :
      '';

    return (
      <div className="location">
        {location}
      </div>
    );
  }
}
