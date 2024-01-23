import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../../asyncActions/products"
import ProductItem from "../ProductItem"
import { Link } from "react-router-dom"
import { removeProductByIdAction } from "../../../store/productsReducer"
import BtnCard from "../../../ui/Btns/BtnCard"
import { addToCartAction } from "../../../store/cartReducer"

import s from './ProductList.module.css'

export default function ProductList(){

    const products = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsList('/products/all'))
        console.log(products);
    }, [])
    return (
        <div className={`${s.cardsList} wrapper`}>
            {products.map(prod => {
                return (
                    <div>
                        <BtnCard btnText={'Add to cart'} action={() => dispatch(addToCartAction(prod))} />
                 <Link to={`/categories/${prod.categoryId}/${prod.id}`}>
                    <div key={prod.id}>
                    <ProductItem {...prod}/></div>
                    </Link>
                    <div><button  onClick={() => dispatch(removeProductByIdAction(prod.id))}>delete product</button></div>
                    </div>
                    
                )
            })}
        </div>
    )
}