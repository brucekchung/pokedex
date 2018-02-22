import { combineReducers } from 'redux'
import { sendTypeReducer } from './sendTypeReducer'
import { sendClickedReducer } from './sendClickedReducer'

const rootReducer = combineReducers({
  type: sendTypeReducer,
  clicked: sendClickedReducer
})

export default rootReducer
