export const addNewCard = (columnId) => (
  {
    type: 'ADD_NEW_CARD',
    payload: columnId
  }
)

export const editCardData = (columnId, cardId) => (
  {
    type: 'EDIT_CARD',
    payload: {
      columnId: columnId,
      cardId: cardId
    }
  }
)