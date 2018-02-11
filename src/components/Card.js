import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

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
  }

  render() {  
    const { data, handleSubmit }= this.props;

    return (
      <div>
        { !this.state.editCardData && 
          <div>
            data 
            <button>Edit</button>
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

export default reduxForm({
  form: 'Card'
})(Card)


