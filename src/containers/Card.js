import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { editCard, moveCard } from '../stores/Column/actions';

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
    const { text, columnId, cardId, editCardData, handleSubmit, triggerCardEdit, handleMovingCard } = this.props;
    
    return (
      <div>
        { !editCardData && 
          <div>
            { text } 
            <button onClick={ () => triggerCardEdit(columnId, cardId) }>Edit</button>
          </div>
        }
        { editCardData && 
          <div>
            <form onSubmit={ handleSubmit }>
              <Field name="updatedText" component={ RenderField } />  
              <button type='submit'>Save</button>
            </form>
          </div>
        }
        <button onClick={ () => handleMovingCard()}>Left</button>        
        <button onClick={ () => handleMovingCard()}>Right</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    triggerCardEdit: (columnId, cardId) => (
      dispatch(editCard(columnId, cardId))
    ),
    handleMovingCard: () => (
      dispatch(moveCard())
    )
  }
)

Card = connect(null, mapDispatchToProps)(Card);

export default reduxForm({
  form: 'Card'
})(Card)


