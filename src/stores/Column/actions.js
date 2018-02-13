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
      columnId: columnId,
      cardId: cardId
    }
  }
)

export const moveCard = (columnId, cardId, direction) => (
  {
    type: 'MOVE_CARD',
    payload: {
      columnId: columnId,
      cardId: cardId,
      direction: direction
    }
  }
)