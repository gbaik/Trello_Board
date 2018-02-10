import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Card from '../components/Card.js';

import * as cardActions from '../stores/Column/actions';

class Column extends Component { 
  constructor(props) { 
    super(props);

    this.handleAddingCard = this.handleAddingCard.bind(this);
  }

  handleAddingCard() {  
    const { dispatch } = this.props;

    cardActions.ADD_NEW_CARD(dispatch);
  }
  
  render() {
    const { title, card1, card2 } = this.props;
    const test = ['hello', 'world', 'bye', '', '', ''];

    return (
      <div>
        <h1>{title}</h1>
        {test.map((test, id) => (
          <Card data={test} key={id}/>
        ))}
        <button onClick={this.handleAddingCard}>+ Add a card</button>
      </div>
    );
  };
}

export default Column;
