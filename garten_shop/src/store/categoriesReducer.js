// // import {createAction, createReducer} from "@reduxjs/toolkit";

// import { createSlice } from "@reduxjs/toolkit"


// // const defaultState = []

// // const ASYNC_CATEGORIES_LIST = 'ASYNC_CATEGORIES_LIST'


// // export const categoriesReducer = ( state = defaultState, action ) => {
// //     switch (action.type) {
// //         case ASYNC_CATEGORIES_LIST:
// //             console.log(state);
// //             return action.payload;
            
    
// //         default:
// //             return [...state];
// //     }
// // }

// // export const asyncCategoriesList = (payload) => ({type: ASYNC_CATEGORIES_LIST, payload})

// const categoriesSlice = createSlice({
//     name: 'categories',
//     initialState: {
//         categories: []
//     },
//     reducers: {
//        async_categories_list(state, action) {
//             state.categories = [...action.payload]
//         }
//     }
// })

// export default categoriesSlice.reducer
// export const { async_categories_list } = categoriesSlice.actions