import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { testid, type, label, id } = this.props;

    if (type === 'area') {
      return (
        <label htmlFor={ id }>
          { label }
          <textarea
            data-testid={ testid }
            type={ type }
            name={ id }
            id={ id }
          />
        </label>
      );
    }
    if (type === 'select') {
      return (
        <label htmlFor={ id }>
          { label }
          <select
            data-testid={ testid }
            type={ type }
            name={ id }
            id={ id }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ testid }
          type={ type }
          name={ id }
          id={ id }
        />
      </label>
    );
  }
}
Input.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
