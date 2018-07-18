import { SET_SEARCH_TERM } from './actions'

export const setSearchTerm = (searchTerm) => ({ // eslint-disable-line import/prefer-default-export
  type: SET_SEARCH_TERM,
  payload: searchTerm
})
