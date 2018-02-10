import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Column from "./Column.js";

class Board extends Component { 
  constructor(props) { 
    super(props);
    
  }


  render() {
    return (
      <div className="board">
        <div className="ui grid center aligned">
          <div className="four wide column"><Column title={'Title 1'} card1={'Card 1 Row #1'} card2={'Card 2 Row #1'}/></div>
          <div className="four wide column"><Column title={'Title 2'} card1={'Card 1 Row #2'} card2={'Card 2 Row #2'}/></div>
          <div className="four wide column"><Column title={'Title 3'} card1={'Card 1 Row #3'} card2={'Card 2 Row #3'}/></div>
          <div className="four wide column"><Column title={'Title 4'} card1={'Card 1 Row #4'} card2={'Card 2 Row #4'}/></div>
        </div>
      </div>
    );
  };
}

export default Board;