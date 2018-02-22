import { combineReducers } from 'redux'
import { sendTypeReducer } from './sendTypeReducer'
import { sendClickedReducer } from './sendClickedReducer'
import { sendDetailReducer } from './sendDetailReducer'

const rootReducer = combineReducers({
  type: sendTypeReducer,
  clicked: sendClickedReducer,
  detail: sendDetailReducer
})

export default rootReducer
