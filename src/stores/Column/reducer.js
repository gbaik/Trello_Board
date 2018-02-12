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
      const { columnId, cardId, updatedText } = action.payload;
      
      let updatedCardData = state.cardData[columnId].map((data, index) => {
        if (index !== cardId) {
          return data;
        } 
    
        let text = updatedText || data[0];

        return [
          text,
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
    default:
      return state;
  }
}

export default column;