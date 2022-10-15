import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    // const { currentState } = this.props;
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   // hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick,
    // } = currentState;

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
      <div id="form-container">
        <form>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="cardName"
              className="form-input"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              className="form-input"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="attr1">
            Força
            <input
              id="attr1"
              className="form-input"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="attr2">
            Defesa
            <input
              id="attr2"
              className="form-input"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="attr3">
            Tech
            <input
              id="attr3"
              className="form-input"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="imageSrc">
            Imagem
            <input
              id="imageSrc"
              className="form-input"
              name="cardImage"
              type="text"
              data-testid="data-testid='image-input'"
              value={ cardImage }
              onChange={ (event) => onInputChange(event) }
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              id="rarity"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ (event) => onInputChange(event) }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoCheck">
            Super Trunfo:
            {
              hasTrunfo === true
                ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <input
                    id="trunfoCheck"
                    name="cardTrunfo"
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ (event) => onInputChange(event) }
                  />)
            }
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className={ `button-disabled-${isSaveButtonDisabled}` }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
