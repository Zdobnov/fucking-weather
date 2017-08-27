import React, {Component} from 'react';

export default class Temperature extends Component {
  render() {
    return (
      <div className="temperature">
        <div className="temperature__value">
          188
        </div>
        <div className="temperature__units">
          <div>C<sup>o</sup></div>
          <div>F<sup>o</sup></div>
        </div>
      </div>
    );
  }
}
