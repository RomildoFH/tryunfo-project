import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  selectRareIcon = (cardrare) => {
    if (cardrare === 'normal') {
      return '🥉';
    }
    if (cardrare === 'raro') {
      return '🥈';
    }
    if (cardrare === 'muito raro') {
      return '🥇';
    }
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
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.props;
    // console.log(cardTrunfo);
    return (
      <div className="card-view">
        <p className="card-name" data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p
          className="card-description"
          data-testid="description-card"
        >
          { cardDescription }
        </p>
        <p
          className="card-attributes"
        >
          ⚔
          <span
            data-testid="attr1-card"
          >
            { cardAttr1 }
          </span>
        </p>
        <p
          className="card-attributes"
        >
          🛡
          <span
            data-testid="attr2-card"
          >
            { cardAttr2 }
          </span>
        </p>
        <p
          className="card-attributes"
        >
          ☯
          <span
            data-testid="attr3-card"
          >
            { cardAttr3 }
          </span>
        </p>
        <div className="card-classes">
          <p
            data-testid="rare-card"
            className={ `card-rare-${cardRare}` }
          >
            { this.selectRareIcon(cardRare) }
          </p>
          <div>
            {
              cardTrunfo && <p data-testid="trunfo-card">⚡</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  // isSaveButtonDisabled: PropTypes.bool,
  // onInputChange: PropTypes.func,
  // onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Card;
