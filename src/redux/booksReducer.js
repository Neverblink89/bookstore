import { FETCH_BOOKS_FAILED, FETCH_BOOKS_SUCCESS} from './actions'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload
    case FETCH_BOOKS_FAILED:
      return action.payload
    default:
      return state

  }
}
