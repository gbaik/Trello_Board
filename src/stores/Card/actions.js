export const editCardData = (columnId, cardId) => (
  {
    type: 'EDIT_CARD_DATA',
    payload: {
      columnId: columnId,
      cardId: cardId
    }
  }
)