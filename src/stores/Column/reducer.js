const initialState = {
  cardData: [
    [
      ['card1', true],
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
    case 'TRIGGER_CARD_EDIT':
      const { columnId, cardId } = action.payload;
      
      let updatedCardData = state.cardData[columnId].map((data, index) => {
        if (index !== cardId) {
          return data;
        } 
    
        return [
          data[0],
          !data[1]
        ]
      })

      return {
        ...state,
        cardData: {
          ...state.cardData,
          [columnId]: updatedCardData
        }
      }
    case 'EDIT_CARD':
      return state;
    default:
      return state;
  }
}

export default column;