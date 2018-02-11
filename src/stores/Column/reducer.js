// const initialState = {
//   cardData: [
//     [1],
//     [2],
//     [3],
//     [4]
//   ]
// }
const initialState= {
  cardData: {
    '0': [0],
    '1': [1],
    '2': [2],
    '3': [3]
  }
}

const column = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CARD':
      console.log({
        ...state,
        cardData: [
          ...state.cardData[action.payload], 'blank'
        ]
      });
      // console.log(state.cardData[action.payload]);
      const id = action.payload;
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

// cardData: [...state.cardData, 'blank']

export default column;