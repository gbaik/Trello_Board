import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Card from '../components/Card.js';

import * as cardActions from '../stores/Column/actions';

class Column extends Component { 
  constructor(props) { 
    super(props);

    this.handleAddingCard = this.handleAddingCard.bind(this);
  }

  handleAddingCard() {  
    cardActions.ADD_NEW_CARD();
  }
  
  render() {
    const { title, cardData } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {cardData.map((data, id) => (
          <Card data={data} key={id}/>
        ))}
        <button onClick={this.handleAddingCard}>+ Add a card</button>
      </div>
    );
  };
}

const mapStateToProps = (state) =>({cardData: state.Column.cardData});

export default connect(mapStateToProps)(Column);
