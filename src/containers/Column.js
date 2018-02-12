import React from 'react';
import {connect} from 'react-redux';

import Card from '../components/Card.js';

import { addNewCard, editCard } from '../stores/Column/actions';

const Column = ({ title, columnId, cardData, handleAddingCard, handleEditCard }) => (
  <div className = "four wide column">
    <h1>{ title }</h1>
      {cardData[columnId].map((data, id) => (
        <Card text = { data[0] } editCardData = { data[1] }columnId = { columnId } cardId = { id } onSubmit={ () => handleEditCard(columnId, id) } key = { id }/>
      ))}
    <button onClick = { () => handleAddingCard(columnId) }>+ Add a card</button>
  </div>
);

const mapStateToProps = (state) => ({ cardData: state.column.cardData });

const mapDispatchToProps = (dispatch) => (
  {
    handleAddingCard: (columnId) => {
      dispatch(addNewCard(columnId))
    },
    handleEditCard: (columnId, cardId) => (
      dispatch(editCard(columnId, cardId, 'hello world'))
    )
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Column);
