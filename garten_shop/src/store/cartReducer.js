
console.log('cart ' +JSON.parse(localStorage.getItem('cart')));
const defaultState = JSON.parse(localStorage.getItem('cart')) ?? []
console.log('cart ' +JSON.parse(localStorage.getItem('cart')));


const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const REMOVE_FROM_CART_POSITION = 'REMOVE_FROM_CART_POSITION'


export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action.payload);
            // проверить есть ли товар в корзине
            const index = state.findIndex(prod => prod.id === action.payload.id)
            if(index === -1){
                const newProd = {...action.payload, count: 1}
                
                return [...state, newProd]
            } else {                
                return state.map(prod => {
                   if (prod.id === action.payload.id) {                    
                    return {...prod, count: prod.count +1} 
                   }  else return prod
                });
            }
        case REMOVE_FROM_CART:
            // ! проверить
       
            const index1 = state.findIndex(prod => prod.id === action.payload.id)
            console.log(index1);
            if (state[index1].count === 1) {
                return state.filter(prod => prod.id !== action.payload.id)
            
            } else if(state[index1].count > 1){
                return state.map(prod => {
                   if (prod.id === action.payload.id) {                    
                    return {...prod, count: prod.count -1} 
                   }  else return prod
                });
            } if(index1 === -1){
                return [...state]
            }
            return [...state]
        
        case REMOVE_FROM_CART_POSITION:
            return [...state]
            
        default:
            return [...state]

    }
}

// action.payload = product
export const addToCartAction = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})
export const removeFromCartPositionAction = (payload) => ({type: REMOVE_FROM_CART_POSITION})

function addToCartManyProducts(){

    // const countInCart = productInCart.map(prod => prod.product_id === product_id ? {...prod, count: prod.count + 1 } : {...prod, count: 1   })
}
    // const countInCart = productInCart.filter(prod => prod.id === product_id).count || 0;