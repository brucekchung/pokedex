export const sendDetailReducer = (state = null, action) => {
  switch (action.type) {
    case 'SEND_DETAIL':
      return action.payload
    default:
      return state
  }
}