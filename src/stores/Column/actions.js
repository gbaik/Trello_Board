export const addNewCard = (columnId) => (
  {
    type: 'ADD_NEW_CARD',
    payload: columnId
  }
)

export const editCard = (columnId, cardId, updatedText) => (
  {
    type: 'EDIT_CARD',
    payload: {
      columnId: columnId,
      cardId: cardId,
      updatedText: updatedText
    }
  }
)

export const deleteCard = (columnId, cardId) => (
  {
    type: 'DELETE_CARD',
    payload: {
      columnId, cardId 
    }
  }
)

export const moveCard = () => (
  {
    type: 'MOVE_CARD'
  }
)