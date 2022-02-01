import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { testid, type, label, id, value, onChange, checked } = this.props;

    if (type === 'area') {
      return (
        <label htmlFor={ id }>
          { label }
          <textarea
            data-testid={ testid }
            type={ type }
            name={ id }
            id={ id }
            value={ value }
            onChange={ onChange }
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
            value={ value }
            onChange={ onChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
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
          value={ value }
          onChange={ onChange }
          checked={ checked }
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
