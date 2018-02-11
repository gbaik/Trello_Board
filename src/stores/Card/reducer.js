const initialState = {
  data: ''
}

const card = (state = initialState, action) => {
  switch(action.type) {
    case 'EDIT_CARD_DATA':
      console.log('hit', action.payload);
      return state;
    default:
      return state
  }
}

export default card;