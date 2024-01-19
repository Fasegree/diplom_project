import { asyncProductsListAction } from "../store/productsReducer"

const URL = ''



export function fetchProductsList(){
    return function(dispatch){
        fetch(URL)
        .then(res => res.json())
        .then(data => dispatch(asyncProductsListAction(data))) // function(data)
    }
}

export function fetchProductById(id){
    return function(dispatch){
        fetch(URL+id)
            .then(res => res.json())
            .then(data => (dispatch(asyncProductsListAction(data))))  // function(data)
    }
}