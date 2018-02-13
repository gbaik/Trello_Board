import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { editCard, deleteCard, moveCard } from '../stores/Column/actions';

const RenderField = (field) => {
  const { meta: { touched, error, warning }} = field; 

  return (
    <input type="text" {...field.input} />
  )
};

class Card extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {  
    const { text, columnId, cardId, editCardData, handleSubmit, title, triggerCardEdit, handleDeletingCard, handleMovingCard } = this.props;
    
    return (
      <div>
        <button onClick={ () => handleDeletingCard(columnId, cardId)}>X</button>                
        { 
          !editCardData && 
          <div>
            { text } 
            <button onClick={ () => triggerCardEdit(columnId, cardId) }>Edit</button>
          </div>
        }
        { 
          editCardData && 
          <div>
            <form onSubmit={ handleSubmit }>
              <Field name="updatedText" component={ RenderField } />  
              <button type='submit'>Save</button>
            </form>
          </div>
        }
        {
          columnId - 1 >= 0 &&
          <button onClick={ () => handleMovingCard(columnId, cardId, -1)}>Left</button>
        }
        {
          columnId + 1 < title.length &&
          <button onClick={ () => handleMovingCard(columnId, cardId, 1)}>Right</button>
        }   
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ title: state.board.title });

const mapDispatchToProps = (dispatch) => (
  {
    triggerCardEdit: (columnId, cardId) => (
      dispatch(editCard(columnId, cardId))
    ),
    handleDeletingCard: (columnId, cardId) => (
      dispatch(deleteCard(columnId, cardId))
    ),
    handleMovingCard: (columnId, cardId, direction) => {
      dispatch(moveCard(columnId, cardId, direction))
      dispatch(deleteCard(columnId, cardId))
    }
  }
)

Card = connect(mapStateToProps, mapDispatchToProps)(Card);

export default reduxForm({
  form: 'Card'
})(Card)


