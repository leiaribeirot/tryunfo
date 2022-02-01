import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          label="Nome da Carta:"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <input
          data-testid="description-input"
          type="textarea"
          label="Descrição da Carta:"
          id="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr1-input"
          type="number"
          label="Atributo 1:"
          id="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr2-input"
          type="number"
          label="Atributo 2:"
          id="attr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr3-input"
          type="number"
          label="Atributo 3:"
          id="attr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          data-testid="image-input"
          type="text"
          label="Carta"
          id="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          testid="rare-input"
          type="select"
          label="Raridade:"
          id="rarity"
          value={ cardRare }
          onChange={ onInputChange }
        />
        <Input
          testid="trunfo-input"
          type="checkbox"
          label="Super Trybe Trunfo"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
