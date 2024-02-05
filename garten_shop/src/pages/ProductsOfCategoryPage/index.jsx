import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  fetchCategoryProduct, fetchProductsListByCategory } from "../../asyncActions/products"
import {  Link, useParams } from "react-router-dom"
import ProductItem from "../../components/Products/ProductItem"

export default function ProductsOfCategoryPage(){
    const  {categoryID} = useParams()
    const  { category, products } = useSelector(store => store.products)
    const dispatch = useDispatch()
    // let data = [];

    useEffect(() => {

        dispatch(fetchProductsListByCategory(categoryID))
    
            window.scrollTo(0, 0);
       
  
    },[])
    // console.log( products)
    return(
        <div className="container">
            ProductsOfCategoryPage
            <h2>{category}</h2>
         <div className="cardsList">

            {products?.map(el => 
            <Link to={`/categories/${el.categoryId}/${el.id}`}>
                <ProductItem prod={el}/>
            </Link>
             
            )}
         </div>

        </div>
    )
}