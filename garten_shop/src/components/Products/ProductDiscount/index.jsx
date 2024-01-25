import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../../asyncActions/products"
import { Link } from "react-router-dom"

export default function ProductDiscount(){

    const products = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsList('/products/all'))
        console.log(products);
    }, [])
    const discountProducts = products.filter(prod => prod.discont_price !== null)
    // const discountProducts = products.filter(prod => prod.discont_price)

    console.log(discountProducts);
    return (
        <div>
            {discountProducts.map(prod => {
                return <Link to={`/categories/${prod.categoryId}/${prod.id}`}><div key={prod.id}> {prod.discont_price} {prod.title}</div></Link>
            })}
        </div>
    )
}