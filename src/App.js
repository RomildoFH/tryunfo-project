import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import initialCards from './cardsIniciais';

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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cardSave: initialCards,
    };
  }

  onInputChange = (event) => {
    const element = event.target;
    const value = element.type === 'checkbox' ? element.checked : element.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  inputsValidator = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const checkCardName = cardName.length > 0;
    const checkDescription = cardDescription.length > 0;
    const checkCardImage = cardImage.length > 0;
    const checkCardRare = cardRare.length > 0;
    const maxAttrPoint = 90;
    const minAttrPoint = 0;
    const maxSomaAttrPoints = 210;
    const numberAttr1 = parseInt(cardAttr1, 10);
    const numberAttr2 = parseInt(cardAttr2, 10);
    const numberAttr3 = parseInt(cardAttr3, 10);
    const checkAttr1 = numberAttr1 <= maxAttrPoint && numberAttr1 >= minAttrPoint;
    const checkAttr2 = numberAttr2 <= maxAttrPoint && numberAttr2 >= minAttrPoint;
    const checkAttr3 = numberAttr3 <= maxAttrPoint && numberAttr3 >= minAttrPoint;
    const checkSoma = (numberAttr1 + numberAttr2 + numberAttr3) <= maxSomaAttrPoints;
    return checkCardName && checkDescription && checkCardImage
    && checkCardRare && checkAttr1 && checkAttr2 && checkAttr3 && checkSoma;
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // cardSave,
      // hasTrunfo,
    } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
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
    };
    this.setState((estadoAnterior) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardSave: [...estadoAnterior.cardSave, newCard],
    }));
  };

  removeCard = (card) => {
    const { cardSave } = this.state;
    // console.log(cardSave);
    // console.log(card.cardName);
    // console.log(card.cardTrunfo);
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newArray = cardSave.filter((objeto) => objeto.cardName !== card.cardName);
    this.setState({
      cardSave: newArray,
    });
  };

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
      cardSave,
    } = this.state;
    this.inputsValidator();
    return (
      <div>
        <h1>Chrono Trigger - Tryunfo Project</h1>
        <div id="newcard-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ !this.inputsValidator() }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div id="preview-container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
            />
          </div>
        </div>
        <div>
          <CardList
            cardSave={ cardSave }
            removeCard={ this.removeCard }
            hasTrunfo={ hasTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
