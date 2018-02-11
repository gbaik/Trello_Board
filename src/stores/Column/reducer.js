const initialState = {
  cardData: [
    [1],
    [2],
    [3],
    [4]
  ]
}

const column = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CARD':
      return {
        ...state,
        cardData: {
          ...state.cardData,
          [action.payload]: [...state.cardData[action.payload], 'blank']
        }
      }
    default:
      return state;
  }
}

export default column;