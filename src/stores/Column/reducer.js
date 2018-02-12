const initialState = {
  cardData: [
    [
      ['card1', false],
      ['card2', false]      
    ],
    [
      ['card1', false]
    ],
    [
      ['card1', false]
    ],
    [
      ['card1', false]
    ]
  ]
}

/*
  3. Make edit button possible with hard code data (EDIT_CARD reducer)
  4. Make edit button dynamic
  5. When clicking on Save, change the value of editCard to false, and when edit is clicked change it to true
*/
const column = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CARD':
      return {
        ...state,
        cardData: {
          ...state.cardData,
          [action.payload]: [
            ...state.cardData[action.payload], 
            ["blank", false]
          ]
        }
      }
    case 'EDIT_CARD':
      console.log('hit', action.payload);
      return state;
    default:
      return state;
  }
}

export default column;