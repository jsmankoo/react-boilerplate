import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
// import { fromJS } from 'immutable'

const something = (state = null, action) => {
  return state
}

const reducer = combineReducers({
  something,
})

const store = createStore(reducer)

export default store
