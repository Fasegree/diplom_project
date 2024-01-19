const defaultState = [];

const ASYNC_PRODUCTS_LIST = 'ASYNC_PRODUCTS_LIST'
const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type ) {
        case REMOVE_PRODUCT_BY_ID:
            return state.filter(prod => prod.id !== action.payload)
        case ASYNC_PRODUCTS_LIST:
            return [...state, ...action.payload]
        default:
            return state;
    }
}


export const asyncProductsListAction = (payload) => ({type:ASYNC_PRODUCTS_LIST, payload})