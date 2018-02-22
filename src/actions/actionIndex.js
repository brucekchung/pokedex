export const sendTypeAction = (type) => ({ 
  type: 'SEND_TYPE',
  payload: type
})

export const sendClickedAction = (id) => ({
  type: 'SEND_CLICKED', 
  payload: id
})

export const sendDetailAction = (poke) => ({
  type: 'SEND_DETAIL',
  payload: poke
})