import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Column from "./Column.js";

class Board extends Component { 
  constructor(props) { 
    super(props);
    
  }

  componentDidMount() {
    console.log(this.props);
    
  }

  render() {
    return (
      <div className="board">
        <div className="ui grid center aligned">
          <div className="four wide column"><Column title={'Title 1'}/></div>
          <div className="four wide column"><Column title={'Title 2'}/></div>
          <div className="four wide column"><Column title={'Title 3'}/></div>
          <div className="four wide column"><Column title={'Title 4'}/></div>
        </div>
      </div>
    );
  };
}

export default Board;