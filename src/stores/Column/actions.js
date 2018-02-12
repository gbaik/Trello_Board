export const addNewCard = (columnId) => (
  {
    type: 'ADD_NEW_CARD',
    payload: columnId
  }
)

export const triggerCardEdit = (columnId, cardId) => (
  {
    type: 'TRIGGER_CARD_EDIT',
    payload: {
      columnId: columnId,
      cardId: cardId
    }
  }
)

export const editCard = (columnId, cardId) => (
  {
    type: 'EDIT_CARD',
    payload: {
      columnId: columnId,
      cardId: cardId
    }
  }
)