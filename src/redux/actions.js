import axios from 'axios'

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED'

export const fetchBooks = () => {
  return dispatch => {
    axios
      .get('http://localhost:8082/api/books')
      .then(response => dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: response.data
      }))
      .catch(err => dispatch({
        type: FETCH_BOOKS_FAILED,
        payload: err
      }))
  }
}
