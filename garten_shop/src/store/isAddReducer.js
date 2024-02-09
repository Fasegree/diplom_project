const IS_ADD_TO_CART = 'IS_ADD_TO_CART'


export const isAddReducer = (state = false, action) => {
    switch (action.type) {
        case IS_ADD_TO_CART:
           
            return state = action.payload;
        default:
            return state;
    }
}



export const isAddToCartAction = (payload) => ({type: IS_ADD_TO_CART, payload})