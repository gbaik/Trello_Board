import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { editCardData } from '../stores/Card/actions';

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
      editCardData: true
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log(event.cardData);
  }

  render() {  
    const { data, columnId, cardId, handleEditCardData, handleSubmit }= this.props;

    return (
      <div>
        { !this.state.editCardData && 
          <div>
            data 
            <button onClick = { () => handleEditCardData(columnId, cardId)}>Edit</button>
          </div>
        }
        { this.state.editCardData && 
          <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
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
    handleEditCardData: (columnId, cardId) => {
      dispatch(editCardData(columnId, cardId));
    }
  }
)

Card = connect(null, mapDispatchToProps)(Card);

export default reduxForm({
  form: 'Card'
})(Card)

