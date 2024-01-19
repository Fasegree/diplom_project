// imoprt {combine} from 'redux'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsReducer } from './productsReducer'

import { thunk } from 'redux-thunk'

const rootReduser = combineReducers({
    products: productsReducer
})

export const store = createStore(rootReduser, applyMiddleware(thunk))