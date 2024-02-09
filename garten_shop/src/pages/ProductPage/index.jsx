import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../asyncActions/products"
import s from "./ProductPage.module.css"
import { ROOT_URL } from "../../App"
import ButtonCard from "../../ui/Btns/BtnCard"
import { addManyToCartAction } from "../../store/cartReducer"

export default function ProductPage() {
    const product = useSelector(store => store.products)
    const { category, product_id } = useParams()
    const dispatch = useDispatch()

    const [currentCount, setCurrentCount] = useState(1);

    useEffect(() => {
   
            window.scrollTo(0, 0);
    
        dispatch(fetchProductById(product_id));
        setCurrentCount(1);
    }, [product_id, dispatch])

   
    // костыль !! 
    const {id, title, description, price, image, count, discont_price } = product 
    const productsInCart = useSelector(store => store.cart)
    const countInCart = useSelector(store => store.cart).filter(prod => prod.id === product_id).count || 0;
  
    // не открывает по ссылке ?? надо предать id товара

    function incr() {
        if (currentCount < 10)
            setCurrentCount(prevCount => prevCount + 1);
    }
    function decr() {
        if (currentCount > 1)
            setCurrentCount(currentCount - 1);
    }
    function addPayload() {
        const payload = {product: product, count: currentCount}
        dispatch(addManyToCartAction(payload))
    }


   
    return (
        <div className="container">
            ProductPage
            <div className={s.productCard}>

                <div><img src={`${ROOT_URL}/${image}`} alt="" /></div>
                <div className={s.cardInfo}>

                <div className={s.description}>
                    <h3>{title}</h3>

                    <div className={s.cardPrice}>
                        {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
                        {discont_price && <p className={s.oldPrice}>${price}</p>}
                        <p>persent</p>
                    </div>

                    <div className={s.controlBtn}>
                        <div className={s.controlAll}>
                            <div className={s.control}>
                                <button onClick={decr}>-</button>
                                <p>{currentCount}</p>
                                <button onClick={incr}>+</button>
                            </div>

                        
                            <ButtonCard title='Add to card' action={ addPayload}/>
                        </div> 
                        {/* /controllAll  */}

                    </div>

                    <p>{description}</p>
                    
                </div>
                <p>Read more</p>
                <div className={s.cardPriceContainer}>
                </div>

                </div>
                {/* cardInfo */}
            </div>
        </div>
    )
}