const defaultState = [];

const ASYNC_PRODUCTS_LIST = 'ASYNC_PRODUCTS_LIST'
const ASYNC_PRODUCT_BY_ID = 'ASYNC_PRODUCT_BY_ID' 
const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID'

// state = {
// categoryTitle: '',
// productList: []
// }

// CategoryProduct {
//     categoryTitle: action.payload.category.title,
//     ProductList: action.payload.asyncProductsListAction
//     AllProduct{
//         categoryTitle: 'All prod'
//         prodList: action.payload
//     }
// }

// allsales {
//     categoryTitle: 'disco Item
//     prodList: action.payload.filter()

// }



export const productsReducer = (state = defaultState, action) => {
    switch (action.type ) {
        case REMOVE_PRODUCT_BY_ID:
            return state.filter(el => el.id !== action.payload)
        case ASYNC_PRODUCTS_LIST:
                console.log('ASYNC_PRODUCTS_LIST' + action.payload);
            return [ ...action.payload]
        case ASYNC_PRODUCT_BY_ID:
            return [...action.payload]
        default:
            return state;
    }
}
//


export const asyncProductsListAction = (payload) => ({type:ASYNC_PRODUCTS_LIST, payload})
export const asyncProductByIdAction = (payload) => ({type:ASYNC_PRODUCT_BY_ID, payload})
export const removeProductByIdAction = (payload) => ({type: REMOVE_PRODUCT_BY_ID, payload}) 