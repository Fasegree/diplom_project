const defaultState = {
    category: '',
    products: [],
    count: 1,
    from: 0,
    to: Infinity,
    isSale: true,
    sortBy: 'default',
};

const ASYNC_PRODUCTS_ALL = 'ASYNC_PRODUCTS_ALL';
const ASYNC_PRODUCTS_CATEGORY = 'ASYNC_PRODUCTS_CATEGORY';
const ASYNC_CATEGORY_LIST = 'ASYNC_CATEGORY_LIST';
const ASYNC_PRODUCTS_OF_CATEGORY = 'ASYNC_PRODUCTS_OF_CATEGORY';
const ASYNC_PRODUCT_BY_ID = 'ASYNC_PRODUCT_BY_ID';
const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID';
const PRODUCTS_SALE = 'PRODUCTS_SALE';

const FILTER_ALL = 'FILTER_ALL';

// const FILTER_FROM = 'FILTER_FROM';
// const FILTER_TO = 'FILTER_TO';
// const FILTER_BY_SALE = 'FILTER_BY_SALE';

const FILTER_BY_DEFAULT = 'FILTER_BY_DEFAULT';
const FILTER_BY_NEWEST = 'FILTER_BY_NEWEST';
const FILTER_HIGH_LOW = 'FILTER_HIGH_LOW';
const FILTER_LOW_HIGH = 'FILTER_LOW_HIGH';

function getFilterFrom(el, from) {
   
    if(el.discont_price && el.discont_price > from){        
        return {...el, isShowFrom: true }
    } 
     if(!el.discont_price && el.price > from){
        return {...el, isShowFrom: true }
    } else return {...el, isShowFrom: false }
    
}

function getFilterTo(el, to) {
    if(el.discont_price && el.discont_price < to){
        return {...el, isShowTo: true }
    } else if(!el.discont_price && el.price < to){
        return {...el, isShowTo: true }
    } else return {...el, isShowTo: false }
}

function getSale(el, isSale) {
    // Show only discounted items ?
    
    if(isSale) {
        if(el.discont_price){
            return {...el, isShowSale: true }
        } else {
            return {...el, isShowSale: false}
        }
    } else {        
            return {...el, isShowSale: true }        
    }
}
export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ASYNC_CATEGORY_LIST:
            return { ...action.payload, category: 'Categories' };
        case ASYNC_PRODUCTS_OF_CATEGORY:
            return { ...action.payload };
        case ASYNC_PRODUCTS_ALL:
            return { ...action.payload, category: 'All products' };
        case PRODUCTS_SALE:
            return { ...action.payload, category: 'Discounted items' };
        case ASYNC_PRODUCT_BY_ID:
            return action.payload[0];
       
        case FILTER_ALL:
            if(action.payload.from >=0){
                let filterAll = action.payload.products.map(el => {
                    el = getFilterFrom(el, action.payload.from);
                    el = getFilterTo(el, action.payload.to);
                    el = getSale(el, action.payload.isSale);
                    return el;
                });
            return {...action.payload, products: filterAll };
            }
            
   

        case FILTER_BY_DEFAULT:
            const filterDefault = action.payload.products.sort((a, b) => a.id - b.id);
            return { ...action.payload, products: filterDefault };
        case FILTER_BY_NEWEST:
            const filterNewest = action.payload.products.sort((a, b) => b.updatedAt - a.updatedAt);
            return { ...action.payload, products: filterNewest };
        case FILTER_HIGH_LOW:
            const filterHighLow = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => b.curent_price - a.curent_price);
            return { ...action.payload, products: filterHighLow };
        case FILTER_LOW_HIGH:
            const filterLowHigh = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => a.curent_price - b.curent_price);
            return { ...action.payload, products: filterLowHigh };
        default:
            return state;
    }
};

export const asyncProductsAllAction = (payload) => ({ type: ASYNC_PRODUCTS_ALL, payload });
export const asyncProductsCategoryAction = (payload) => ({ type: ASYNC_PRODUCTS_CATEGORY, payload });
export const async_categories_listAction = (payload) => ({ type: ASYNC_CATEGORY_LIST, payload });
export const asyncProductsOfCategoryAction = (payload) => ({ type: ASYNC_PRODUCTS_OF_CATEGORY, payload });
export const asyncProductByIdAction = (payload) => ({ type: ASYNC_PRODUCT_BY_ID, payload });
export const products_sale_action = (payload) => ({ type: PRODUCTS_SALE, payload });
export const removeProductByIdAction = (payload) => ({ type: REMOVE_PRODUCT_BY_ID, payload });

export const filterAllAction = (payload) => ({ type: FILTER_ALL, payload });


export const filterByDefaultAction = (payload) => ({ type: FILTER_BY_DEFAULT, payload });
export const filterNewestAction = (payload) => ({ type: FILTER_BY_NEWEST, payload });
export const filterHighLowAction = (payload) => ({ type: FILTER_HIGH_LOW, payload });
export const filterLowHighAction = (payload) => ({ type: FILTER_LOW_HIGH, payload });
