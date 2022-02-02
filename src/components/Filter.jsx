import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <div>
        <h4>Filtro de busca</h4>

        <input
          name="filterByName"
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
        />

        <select
          name="filterByRarity"
          type="select"
          placeholder="Raridade"
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas" selected>Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <input
          name="filterByTrunfo"
          type="checkbox"
          data-testid="trunfo-filter"
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
