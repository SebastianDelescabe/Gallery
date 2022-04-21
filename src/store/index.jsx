import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducer/index.jsx'
import { thunk } from 'redux-thunk'

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);