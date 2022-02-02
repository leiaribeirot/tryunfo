import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class ShowCards extends Component {
  render() {
    const {
      cards,
      filterByName,
      filterByRarity,
      filterByTrunfo,
      onRemoveButtonClick,
    } = this.props;

    let filterCards = cards;

    if (cards && filterByName) {
      filterCards = filterCards.filter(({ cardName }) => cardName.includes(filterByName));
    }
    if (cards && filterByRarity !== 'todas') {
      filterCards = filterCards.filter(({ cardRare }) => (cardRare === filterByRarity));
    }
    if (cards && filterByTrunfo) {
      filterCards = cards.filter(({ cardTrunfo }) => cardTrunfo);
    }

    return (
      <>
        {
          (filterCards || []).map((card) => (<Card
            { ...card }
            key={ card.cardId }
            onRemoveButtonClick={ (id) => onRemoveButtonClick(id) }
          />))
        }
      </>
    );
  }
}

ShowCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  filterByName: PropTypes.string,
  filterByRarity: PropTypes.string,
  filterByTrunfo: PropTypes.string,
  onRemoveButtonClick: PropTypes.func,
}.isRequired;
