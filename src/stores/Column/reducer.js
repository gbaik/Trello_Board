const initialState= {
  cardData: []
}

const column = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CARD':
      return Object.assign({}, state, {
        cardData: [...state.cardData, 'blank']
      })
    default:
      return state;
  }
}

export default column;