import {combine} from 'redux'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsReducer } from './productsReducer'
import { categoriesReducer } from './categoriesReducer'
import { cartReducer } from './cartReducer'

import { thunk } from 'redux-thunk'
import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persingConfig = {
    key: 'localStorage',
    storage,
    whitelist: ['cart'],
    blacklist: ['_persist']

}


const rootReduser = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    // oneProduct: oneProductReducer
})

const persistedReducer = persistReducer(persingConfig, rootReduser)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
//Reducer => category, OneProd, Cart, 