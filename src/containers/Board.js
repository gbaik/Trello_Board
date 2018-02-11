import React from 'react';
import {connect} from 'react-redux';

import Column from "./Column.js";

const Board = ({title}) => (
  <div className = "board">
    <div className = "ui grid center aligned">
      {title.map((title, id) => (
        <Column title = { title } key = { id } columnId = {id}/>
      ))}
    </div>
  </div>
)

const mapStateToProps = (state) => ({ title: state.board.title });

export default connect(mapStateToProps)(Board);