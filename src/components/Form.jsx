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
        <Input
          testid="rare-input"
          type="select"
          label="Raridade:"
          id="rarity"
        />
        <Input
          testid="trunfo-input"
          type="checkbox"
          label="Super Trybe Trunfo"
          id="trunfo"
        />
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
