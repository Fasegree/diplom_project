import { ROOT_URL } from "../App";
import { asyncCategoriesListAction } from "../store/categoriesReducer";
import { asyncProductByIdAction, asyncProductsAllAction, asyncProductsOfCategoryAction,  products_sale_action } from "../store/productsReducer"


function getDefaultState(arr) {
        if(Array.isArray(arr)) {
            return {category: '', 
                    products: arr.map(el => ({...el, isShowFrom: true, isShowTo: true, isShowSale: true, count: 1})),                      
                    from: 0,
                    to: Infinity,
                    isSale: false,
                    sortBy: 'default'
                   }
        } else {
            return {category: arr.category.title, 
                    products: arr.data.map(el => ({...el, isShowFrom: true, isShowTo: true, isShowSale: true, count: 1 })),
                    from: 0,
                    to: Infinity,
                    isSale: false,
                    sortBy: 'default'
                   }
        }

}
 
// discount productsAll
export function fetchProductsAll(type){
    return function(dispatch){
      
        fetch(ROOT_URL + '/products/all' )
        .then(res => res.json())
        .then(data =>{
         
            if(type === 'all'){
                dispatch(asyncProductsAllAction(getDefaultState(data)))
            }else if(type ==='sale'){
                dispatch(products_sale_action(getDefaultState(data?.filter(el => el.discont_price))))
            }else if(type === 'homeSale'){
                dispatch(asyncProductsAllAction(getDefaultState(

                                                             data?.filter(el => el.discont_price).map(product => ({
                                                                ...product,
                                                                discountPercentage: ((product.price - product.discont_price) / product.price) * 100
                                                            }))
                                                            .sort((a, b) => b.discountPercentage - a.discountPercentage)
                                                            .slice(0, 4)
                                                    )) ) 
            
            }
        }
        
        )
    }
}
// product list
export function fetchProductsListByCategory(category){
    return function(dispatch){
        fetch(ROOT_URL + '/categories/' + category)
        .then(res => res.json())
        .then(data => dispatch(asyncProductsOfCategoryAction(getDefaultState(data))))
    }
}


// products/ productCard
export function fetchProductById(id){
    return function(dispatch){
        fetch(ROOT_URL + '/products/' + id)
            .then(res => res.json())
            .then(data => (dispatch(asyncProductByIdAction(data))))  // function(data)
    }
}
// products/ categories list
export function fetchCatigoriesList(type){
    return function(dispatch){
        fetch(ROOT_URL + '/categories/all')
        .then(res => res.json())
        .then(data => {
            console.log(type + "type is");
            if(type === 'homeCategory'){
                
                (dispatch(asyncCategoriesListAction(data.slice(0, 4))))
            }else if(type === 'category'){
                (dispatch(asyncCategoriesListAction(data)))
            }
        }
        )
    }
}

