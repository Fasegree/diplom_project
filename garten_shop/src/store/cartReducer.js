
console.log('cart ' +JSON.parse(localStorage.getItem('cart')));
const defaultState = JSON.parse(localStorage.getItem('cart')) ?? []
console.log('cart ' +JSON.parse(localStorage.getItem('cart')));


const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            
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
            if (state[index1].count === 1) {
                return state.filter(prod => prod.id !== action.payload.id)
            } else {
               return state[index1].count -1
            }
            
        default:
            return [...state]

    }
}

// action.payload = product
export const addToCartAction = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})