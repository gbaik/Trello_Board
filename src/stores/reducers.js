import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import Column from './Column/reducer.js'

const reducers = combineReducers({
  form: formReducer,
  Column
});

export default reducers;