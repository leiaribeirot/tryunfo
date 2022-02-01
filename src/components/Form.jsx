import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  render() {
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          label="Nome da Carta:"
          id="name"
        />
        <input
          data-testid="description-input"
          type="textarea"
          label="Descrição da Carta:"
          id="description"
        />
        <input
          data-testid="attr1-input"
          type="number"
          label="Atributo 1:"
          id="attr1"
        />
        <input
          data-testid="attr2-input"
          type="number"
          label="Atributo 2:"
          id="attr2"
        />
        <input
          data-testid="attr3-input"
          type="number"
          label="Atributo 3:"
          id="attr3"
        />
        <input
          data-testid="image-input"
          type="text"
          label="Carta"
          id="image"
        />
        <label htmlFor="cardRarity">
          Raridade da Carta:
          <select
            id="cardRarity"
            name="cardRarity"
            type="select"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="isSuperTrybeTrunfo">
          Super Trybe Trunfo
          <input
            id="isSuperTrybeTrunfo"
            name="isSuperTrybeTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
