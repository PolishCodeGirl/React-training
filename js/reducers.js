import { SET_SEARCH_TERM } from './actions'
// import { setSearchTerm } from './actionCreators'

const initialState = {
  searchTerm: '',
}

const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload })

// rootReducer for whole store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
