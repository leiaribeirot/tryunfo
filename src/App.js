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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    console.log(target.id);
    this.setState({ [target.name]: target.checked ? target.checked : target.value });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
