import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import booksReducer from './booksReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'



let rootReducer = combineReducers({
  books: booksReducer
})

let middleware = [thunk, logger]

// export default () => createStore(rootReducer, applyMiddleware(...middleware), + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export default () => createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));
