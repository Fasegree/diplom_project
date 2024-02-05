import {combineReducers, configureStore } from '@reduxjs/toolkit'


import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'

import {thunk} from 'redux-thunk'
import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesSlice from './categoriesSlice'



const initialState = []

const persingConfig = {
    key: 'localStorage',
    storage,
    whitelist: ['cart'],
    blacklist: ['_persist']

}


const rootReduser = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesSlice

    // oneProduct: oneProductReducer
})

export const store = configureStore({
    reducer: rootReduser,
    // middleware: [thunk],
})

// const persistedReducer = persistReducer(persingConfig, rootReduser)


export const persistor = persistStore(store)
// export const store = createStore(persistedReducer, applyMiddleware(thunk))
//Reducer => category, OneProd, Cart, 