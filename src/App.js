import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      cardId: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }, this.validateButton);
  }

  handleSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardId: uuidv4(),
    };

    this.setState({
      cards: [...cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardId: '',
      isSaveButtonDisabled: true,
    });
  }

  validateButton() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttr = 90;
    const maxAttrTotal = 210;

    const enableBtn = [];

    if ((+cardAttr1 + +cardAttr2 + +cardAttr3) > maxAttrTotal) enableBtn.push(false);

    Object.entries(this.state).forEach(([key, value]) => {
      if (key.includes('cardAttr') && (+value < 0 || +value > maxAttr || +value === '')) {
        enableBtn.push(false);
      }
      if (!key.includes('cardId') && value === '') enableBtn.push(false);
    });

    if (enableBtn.includes(false)) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <section>
          <h1>Tryunfo</h1>
          <Form
            { ...this.state }
            onInputChange={ this.handleInputChange }
            onSaveButtonClick={ this.handleSaveButtonClick }
          />
          <Card { ...this.state } />
        </section>
        <section>
          <h1>Todas as cartas</h1>
          {
            cards.map((card) => <Card key={ card.cardId } { ...card } />)
          }
        </section>
      </>
    );
  }
}

export default App;
