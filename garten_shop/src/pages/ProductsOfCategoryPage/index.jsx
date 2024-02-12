import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  fetchCategoryProduct, fetchProductsListByCategory } from "../../asyncActions/products"
import {  Link, useParams } from "react-router-dom"
import ProductItem from "../../components/Products/ProductItem"
import FilterPanel from "../../components/FilterPanel"

export default function ProductsOfCategoryPage(){
    const  {categoryID} = useParams()
    const  { category, products } = useSelector(store => store.products)
    const dispatch = useDispatch()
    // let data = [];

    useEffect(() => {

        dispatch(fetchProductsListByCategory(categoryID))
    
            window.scrollTo(0, 0);
       
  
    },[])
    console.log( products)
    return(
        <div className="container">
            ProductsOfCategoryPage
            <h2>{category}</h2>
            <FilterPanel />
         <div className="cardsList">

            {products?.map(prod => (
                prod?.isShowFrom && prod?.isShowTo && prod?.isShowSale &&

            <Link key={prod.id} to={`/categories/${categoryID}/${prod.id}`}>
                <ProductItem prod={prod}/>
            </Link>
            )
             
            )}
         </div>

        </div>
    )
}