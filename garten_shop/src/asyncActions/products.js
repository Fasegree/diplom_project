import { asyncCategoriesList } from "../store/categoriesReducer";
import { asyncProductByIdAction, asyncProductsListAction } from "../store/productsReducer"

export const ROOT_URL = 'http://localhost:3333'

 

export function fetchProductsList(postfix=''){
    return function(dispatch){
        console.log(ROOT_URL+postfix);
        fetch(ROOT_URL + postfix )
        .then(res => res.json())
        .then(data =>{ 
            console.log(typeof(data));

            //! костыльное решение нужно переработать
            try {
                dispatch(asyncProductsListAction(data.data))
            } catch (error) {
                dispatch(asyncProductsListAction(data))
            }
            // if(typeof(data) === 'object'){
              
            //     dispatch(asyncProductsListAction(data.data))
            // } else {
                
            //     dispatch(asyncProductsListAction(data))
            // }
        }) 
    }
}

export function fetchProductById(id){
    return function(dispatch){
        fetch(ROOT_URL + '/products/' + id)
            .then(res => res.json())
            .then(data => (dispatch(asyncProductByIdAction(data))))  // function(data)
    }
}

export function fetchCatigoriesList(){
    return function(dispatch){
        fetch(ROOT_URL+ '/categories/all')
        .then(res => res.json())
        .then(data => (dispatch(asyncCategoriesList(data))))
    }
}