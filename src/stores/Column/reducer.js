import { ADD_NEW_CARD } from './actions';

const initialState= {
  cardData: ['test1']
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CARD:
      console.log('hit');
      return action.payload.data
    default:
      return state;
  }
}
