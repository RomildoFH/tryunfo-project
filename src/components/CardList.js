import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  handleFilter = (event) => {
    const { value, type, name } = event.target;
    if (type === 'text') {
      this.setState({
        filterName: value,
      });
      // console.log('usado filtro de nome');
    }
    if (name === 'filterRare') {
      this.setState({
        filterRare: value,
      });
      // console.log('usado filtro de raridade');
    }
    if (name === 'filterTrunfo') {
      this.setState({
        filterTrunfo: event.target.checked,
      });
      // console.log('usado filtro de raridade');
    }
  };

  filteredCards = () => {
    const { cardSave } = this.props;
    const { filterName, filterRare, filterTrunfo } = this.state;
    let filteredCards = cardSave;
    if (filterName !== '') {
      filteredCards = cardSave.filter((card) => card.cardName
        .includes(filterName));
    }
    if (filterRare !== 'todas') {
      filteredCards = filteredCards.filter((card) => card.cardRare === filterRare);
      // console.log(`If do rare acessado o filteredCards é ${filteredCards}`)
    }
    if (filterTrunfo !== false) {
      filteredCards = filteredCards.filter((card) => card.cardTrunfo === filterTrunfo);
    }
    return filteredCards;
  };

  render() {
    const {
      // cardSave,
      removeCard,
    } = this.props;
    const { filterName, filterTrunfo } = this.state;
    return (
      <div className="baralho-container">
        <div className="filter-container">
          <h4 id="filter-title">PROCURAR CARTAS</h4>
          <div className="filter-controls">
            <label htmlFor="filterName">
              Filtrar por nome:
              {' '}
              <input
                name="filterName"
                id="filterName"
                type="text"
                data-testid="name-filter"
                value={ filterName }
                onChange={ (event) => this.handleFilter(event) }
                disabled={ filterTrunfo }
              />
            </label>
            <select
              id="rarity-filter"
              name="filterRare"
              data-testid="rare-filter"
              // value={ cardFilterRare }
              onChange={ (event) => {
                this.handleFilter(event);
              } }
              disabled={ filterTrunfo }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <label htmlFor="trunfo-filter">
              Super Trunfo
              <input
                id="trunfo-filter"
                type="checkbox"
                name="filterTrunfo"
                data-testid="trunfo-filter"
                checked={ filterTrunfo }
                onChange={ (event) => {
                  this.handleFilter(event);
                } }
              />
            </label>
            <h4 id="searching-for">
              Procurando por:
              {' '}
              {filterName}
            </h4>
          </div>
        </div>
        <section className="listaGames">
          { this.filteredCards().map((card, index) => (
            <div key={ index } className="cardview-container">
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                id={ `carta-btn-${index}` }
                className="btn-excluir"
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ () => removeCard(card) }
              >
                Excluir Carta
              </button>
            </div>
          )) }
        </section>
      </div>
    );
  }
}

CardList.propTypes = {
  cardSave: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default CardList;
