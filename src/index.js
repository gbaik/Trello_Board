import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

// import reducers from "./stores/reducers.js"
import middleware from './stores/middleware';

import Board from "./containers/Board.js";
import Column from './stores/Column/reducer.js'

const store = createStore(Column, middleware);

const App = () => (
  <Provider store={store}> 
    <Board />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
