import { ADD_NEW_CARD } from './actions';

const initialState= {
  card: []
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CARD:
      return action.payload.data
    default:
      return state;
  }
}
