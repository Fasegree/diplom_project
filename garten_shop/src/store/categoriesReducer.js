
const defaultState = []

const ASYNC_CATEGORIES_LIST = 'ASYNC_CATEGORIES_LIST'

export const categoriesReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case ASYNC_CATEGORIES_LIST:
            console.log(state);
            return [...action.payload];
            
    
        default:
            return [...state];
    }
}

export const asyncCategoriesList = (payload) => ({type: ASYNC_CATEGORIES_LIST, payload})