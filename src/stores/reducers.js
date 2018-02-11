import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import column from './Column/reducer.js'

const reducers = combineReducers({
  form: formReducer,
  column
});

export default reducers;