import { ROOT_URL } from "../App";
import { async_categories_list } from "../store/categoriesSlice";
import { asyncProductByIdAction, asyncProductsAllAction, asyncProductsCategoryAction, asyncProductsListAction, asyncProductsOfCategoryAction } from "../store/productsReducer"



 
// discount productsAll
export function fetchProductsAll(){
    return function(dispatch){
      
        fetch(ROOT_URL + '/products/all' )
        .then(res => res.json())
        .then(data => dispatch(asyncProductsAllAction(data)))
    }
}
// product list
export function fetchProductsListByCategory(category){
    return function(dispatch){
        fetch(ROOT_URL + '/categories/' + category)
        .then(res => res.json())
        .then(data => dispatch(asyncProductsOfCategoryAction(data)))
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
export function fetchCatigoriesList(){
    return function(dispatch){
        fetch(ROOT_URL + '/categories/all')
        .then(res => res.json())
        .then(data => (dispatch(async_categories_list(data))))
    }
}