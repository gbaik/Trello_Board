import React from 'react';
import {connect} from 'react-redux';

import Card from '../components/Card.js';

import { addNewCard } from '../stores/Column/actions';

const Column = ({ title, id, cardData, handleAddingCard }) => (
  <div className="four wide column">
    <h1>{ title }</h1>
      {cardData[id].map((data, id) => (
        <Card data={ data } key={ id }/>
      ))}
    <button onClick={ () => handleAddingCard(id) }>+ Add a card</button>
  </div>
);

const mapStateToProps = (state) => ({ cardData: state.column.cardData });

const mapDispatchToProps = (dispatch) => (
  {
    handleAddingCard: (id) => {
      dispatch(addNewCard(id))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Column);