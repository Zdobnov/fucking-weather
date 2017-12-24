import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {
  static propTypes = {
    condition: PropTypes.object.isRequired
  }

  static defaultProps = {
    condition: {}
  }

  render() {
    return (
      <section className="description">
        {this.props.condition.text || ''}
      </section>
    );
  }
}
