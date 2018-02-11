import React from 'react';
import Column from "./Column.js";

const Board = ({}) => (
  <div className="board">
    <div className="ui grid center aligned">
      <div className="four wide column"><Column title={'Title 1'}/></div>
      <div className="four wide column"><Column title={'Title 2'}/></div>
      <div className="four wide column"><Column title={'Title 3'}/></div>
      <div className="four wide column"><Column title={'Title 4'}/></div>
    </div>
  </div>
)




export default Board;