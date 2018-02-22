import { combineReducers } from 'redux'
import { sendTypeReducer } from './sendTypeReducer'

const rootReducer = combineReducers({
  type: sendTypeReducer,
})

export default rootReducer
