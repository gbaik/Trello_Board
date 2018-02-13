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

const column = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CARD': {
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
    }
    case 'EDIT_CARD': {
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
    }
    case 'DELETE_CARD': {
      const { columnId, cardId } = action.payload;

      let updatedColumn = state.cardData[columnId].filter((data, index) => (index !== cardId));

      return {
        ...state,
        cardData: {
          ...state.cardData,
          [columnId]: updatedColumn
        }
      }
    }
    case 'MOVE_CARD': {
      let { columnId, cardId, direction } = action.payload;
  
      let cardData = state.cardData[columnId][cardId];

      columnId += direction;

      let updatedCard = state.cardData[columnId].slice();
      updatedCard.splice(cardId, 0, cardData);

      return {
        ...state,
        cardData: {
          ...state.cardData,
          [columnId]: updatedCard
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default column;