import {combineReducers, configureStore } from '@reduxjs/toolkit'


import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'


import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { isAddReducer } from './isAddReducer'
import { filterReducer } from './FilterReducer'
import modalSlice from './modalSlice'
import { categoriesReducer } from './categoriesReducer'



// const initialState = []

const persistConfig = {
    key: 'ab',
    storage,
    // whitelist: ['cart'],
    // blacklist: ['_persist']

}


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    isAdd: isAddReducer,
    filter: filterReducer,
    modal: modalSlice

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
    // middleware: [thunk],
})

// const persistedReducer = persistReducer(persingConfig, rootReduser)


export const persistor = persistStore(store)
// export const store = createStore(persistedReducer, applyMiddleware(thunk))
