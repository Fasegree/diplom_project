const defaultState = {
    isAddToCart: false,
    isGetCoupon: false,
    isShowModal: false,
   
}
// const IS_ADD_TO_CART = 'IS_ADD_TO_CART'
const IS_SHOW_MODAL = 'IS_SHOW_MODAL'
const IS_GET_COUPON = 'IS_GET_COUPON'


export const isAddReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case IS_ADD_TO_CART:
        //     return state = action.payload;


        case IS_GET_COUPON:
            return state = {...state, ...action.payload};
        case IS_SHOW_MODAL:
            return state = {...state, ...action.payload};
        default:
            return state;
    }
}



// export const isAddToCartAction = (payload) => ({type: IS_ADD_TO_CART, payload})
export const isGetCouponAction = (payload) => ({type: IS_GET_COUPON,payload})
export const isShowModalAction = (payload) => ({type: IS_SHOW_MODAL, payload})