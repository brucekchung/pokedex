export const sendClickedReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEND_CLICKED':
      return action.payload
    default:
      return state
  }
}