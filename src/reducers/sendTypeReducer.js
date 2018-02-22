export const sendTypeReducer = (state = null, action) => {
  switch (action.type) {
    case 'SEND_TYPE':
      return action.payload
    default:
      return state
  }
}
