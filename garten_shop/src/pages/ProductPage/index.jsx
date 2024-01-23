import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../asyncActions/products"

export default function ProductPage(){
    const product = useSelector(store => store.products)
    const { category, product_id } = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchProductById(product_id))
    },[])
    console.log(product);
// не открывает по ссылке ?? надо предать id товара
    return(
        <div>
            ProductPage
            <p>{product[0]?.title}</p>
            <p>price: {product[0]?.price}</p>
        </div>
    )
}