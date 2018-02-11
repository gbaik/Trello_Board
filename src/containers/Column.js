import React from 'react';
import {connect} from 'react-redux';

import Card from '../components/Card.js';

import { addNewCard } from '../stores/Column/actions';

const Column = ({ title, cardData, handleAddingCard }) => (
  <div>
    <h1>{ title }</h1>
    {cardData.map((data, id) => (
      <Card data={ data } key={ id }/>
    ))}
    <button onClick={ handleAddingCard }>+ Add a card</button>
  </div>
);

const mapStateToProps = (state) => ({ cardData: state.column.cardData });

const mapDispatchToProps = (dispatch) => (
  {
    handleAddingCard: () => {
      dispatch(addNewCard())
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Column);