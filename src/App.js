import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.checked ? target.checked : target.value,
    }, this.validateButton);
  }

  validateButton() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const max = 90;
    const maxTotal = 210;

    const enableBtn = [];

    if ((+cardAttr1 + +cardAttr2 + +cardAttr3) > maxTotal) {
      enableBtn.push(false);
    }

    Object.entries(this.state).forEach(([key, value]) => {
      if (key.includes('cardAttr') && (+value < 0 || +value > max || +value === '')) {
        enableBtn.push(false);
      }

      if (value === '') {
        enableBtn.push(false);
      }
    });

    if (enableBtn.includes(false)) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleInputChange }
          onSaveButtonClick={ this.handleSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
