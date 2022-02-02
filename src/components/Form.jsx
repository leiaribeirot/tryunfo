import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          testid="name-input"
          type="text"
          label="Nome"
          id="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          testid="description-input"
          type="area"
          label="Descrição"
          id="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          testid="attr1-input"
          type="number"
          label="Attr01"
          id="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          testid="attr2-input"
          type="number"
          label="Attr02"
          id="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          testid="attr3-input"
          type="number"
          label="Attr03"
          id="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          testid="image-input"
          type="text"
          label="Imagem"
          id="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          testid="rare-input"
          type="select"
          label="Raridade"
          id="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
          testid="trunfo-input"
          type="checkbox"
          label="Super Trunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        /> }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
