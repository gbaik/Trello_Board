import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { triggerCardEdit } from '../stores/Column/actions';


const RenderField = (field) => {
  const { meta: { touched, error, warning }} = field; 

  return (
    <input type="text" {...field.input} />
  )
};

class Card extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      editCardData: false
    }
  }

  render() {  
    const { text, columnId, cardId, handleSubmit, triggerCardEdit } = this.props;
    
    return (
      <div>
        { !this.state.editCardData && 
          <div>
            { text } 
            <button onClick={ () => triggerCardEdit(columnId, cardId) }>Edit</button>
          </div>
        }
        { this.state.editCardData && 
          <div>
            <form onSubmit={ handleSubmit }>
              <Field name="cardData" component={ RenderField } />  
              <button type='submit'>Save</button>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    triggerCardEdit: (columnId, cardId) => (
      dispatch(triggerCardEdit(columnId, cardId))
    )
  }
)

Card = connect(null, mapDispatchToProps)(Card);

export default reduxForm({
  form: 'Card'
})(Card)


