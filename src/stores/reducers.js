import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import board from './Board/reducer.js'
import column from './Column/reducer.js'

const reducers = combineReducers({
  form: formReducer,
  board,
  column
});

export default reducers;