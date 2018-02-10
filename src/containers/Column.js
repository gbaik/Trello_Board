import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Card from '../components/Card.js';

import * as cardActions from '../stores/Column/actions';

class Column extends Component { 
  constructor(props) { 
    super(props);

    this.state = {
      data: ['']
    }

    this.handleAddingCard = this.handleAddingCard.bind(this);
  }

  handleAddingCard() {  
    // const { dispatch } = this.props;

    // cardActions.ADD_NEW_CARD(dispatch);
  
    const { data } = this.state;

    this.setState({
      data: [...data, 'Blank']
    })  
  }
  
  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {this.state.data.map((data, id) => (
          <Card data={data} key={id}/>
        ))}
        <button onClick={this.handleAddingCard}>+ Add a card</button>
      </div>
    );
  };
}

export default Column;
