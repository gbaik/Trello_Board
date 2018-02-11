import React from 'react';
import {connect} from 'react-redux';

import Card from '../components/Card.js';

import { addNewCard } from '../stores/Column/actions';
import { editCardData } from '../stores/Card/actions';

const Column = ({ title, columnId, cardData, handleAddingCard, handleEditCardData }) => (
  <div className = "four wide column">
    <h1>{ title }</h1>
      {cardData[columnId].map((data, id) => (
        <Card data = { data } key = { id } onSubmit={ () => handleEditCardData(columnId, id) }/>
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
    handleEditCardData: (columnId, cardId) => {
      dispatch(editCardData(columnId, cardId));
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Column);
