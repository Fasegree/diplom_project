import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../asyncActions/products"
import s from "./ProductPage.module.css"
import { ROOT_URL } from "../../App"

export default function ProductPage(){
    const product = useSelector(store => store.products)
    const { category, product_id } = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchProductById(product_id))
    },[])

    // костыль !! 
    const { title, description, price, image, count, discont_price } =  product[0] ?? product

    const countInCart = useSelector(store => store.cart).filter(prod => prod.id === product_id).count || 0;
    console.log(product, countInCart);
// не открывает по ссылке ?? надо предать id товара
    return(
        <div className="container">
            ProductPage
                        <div><img src={`${ROOT_URL}/${image}`} alt="" /></div>
            <div className={s.description}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <p>{product[0]?.title}</p>
            <div className={s.cardPriceContainer}>
                  <div className={s.cardPrice}>
                    {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
                    {discont_price && <p className={s.oldPrice}>${price}</p>}
                  </div>
             </div>



        </div>
    )
}