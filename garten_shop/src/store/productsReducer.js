const defaultState = {category: '', data: []};

const ASYNC_PRODUCTS_ALL = 'ASYNC_PRODUCTS_ALL'
const ASYNC_PRODUCTS_CATEGORY = 'ASYNC_PRODUCTS_CATEGORY'
const ASYNC_PRODUCTS_OF_CATEGORY = 'ASYNC_PRODUCTS_OF_CATEGORY'
const ASYNC_PRODUCT_BY_ID = 'ASYNC_PRODUCT_BY_ID' 
const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID'

const FILTER_BY_SALE = 'FILTER_BY_SALE'

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



// export const productsReducer = (state = defaultState, action) => {
//     switch (action.type ) {
//         case REMOVE_PRODUCT_BY_ID:
//             return state.filter(el => el.id !== action.payload)
//         case ASYNC_PRODUCTS_LIST:
//                 console.log('ASYNC_PRODUCTS_LIST' + action.payload);
//             return [ ...action.payload]
//         case ASYNC_PRODUCT_BY_ID:
//             return [...action.payload]
//         default:
//             return state;
//     }
// }
//

function addIsShowProp(arr) {
    return arr.map(el => ({...el, isShow: true}))
}

export const productsReducer = (state = defaultState, action) => {
        switch (action.type ) {
            case ASYNC_PRODUCTS_ALL:
                return {
                    category: 'Products all', 
                    products: addIsShowProp(action.payload) 
                }
            case ASYNC_PRODUCTS_CATEGORY:
                return {
                    category_title_list: action.payload.category.title, 
                    products: addIsShowProp(action.payload.data)}
                
            case ASYNC_PRODUCTS_OF_CATEGORY:
               
                return {category: action.payload.category.title, products: action.payload.data}
            case ASYNC_PRODUCT_BY_ID:
                    return [...action.payload]
            case FILTER_BY_SALE:
                if(action.payload){
                    return{
                        ...state,
                        products: addIsShowProp(state.products).map( el =>{
                            if(!el.discount_price){
                                el.isShow = false
                            }
                            return el
                        })
                    }
                } else {
                    return {
                        ...state,
                        products: addIsShowProp(state.products) 
                    }
                }


        //   case SALE_PRODUCTS:
        //     return {
        //         category: action.payload.category.title, 
        //         products: action.payload.data
        //     }


            case "SORT_BY_PAYLOAD":
                let sortedProducts = state.products.slice().sort((a, b) => a.price - b.price)
                if(action.payload === 'priceAB'){
                    console.log();
                }
                return {...state, sortedProducts}
            default:
                return state;
        }
    }

export const asyncProductsAllAction = (payload) => ({type:ASYNC_PRODUCTS_ALL, payload})
export const asyncProductsCategoryAction = (payload) => ({type: ASYNC_PRODUCTS_CATEGORY, payload})
export const asyncProductsOfCategoryAction = (payload) => ({type: ASYNC_PRODUCTS_OF_CATEGORY, payload})
export const asyncProductByIdAction = (payload) => ({type:ASYNC_PRODUCT_BY_ID, payload})
export const removeProductByIdAction = (payload) => ({type: REMOVE_PRODUCT_BY_ID, payload}) 
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload}) 