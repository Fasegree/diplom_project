import { useEffect } from "react";
import { fetchProductById } from "../../../asyncActions/products";
import BtnCard from "../../../ui/Btns/BtnCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../../store/cartReducer";
import s from './ProductItem.module.css'

export default function ProductItem({id, title, price, discont_price, description, image, categoryId}){
    const product = useSelector(store => store.products)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchProductById(id))
        
    // }, [])
    // console.log(product);
     return (
        <div className={s.productCard}>
            <div className={s.image}>
                <img src={`http://localhost:3333/${image}`}  alt={title}/>
               
            {/* <BtnCard btnText={'Add to cart'}  action={() =>  dispatch(addToCartAction)}/> */}
            </div>
            <div className={s.cardInfo}>
                <p>{title}</p>
                <p>${price}</p>
                {discont_price && <div className="discount">{`-${Math.round(100-discont_price*100/price)}%`}</div>}
                <p> price: {price}</p>
                {discont_price && <p> discont_price: ${discont_price}</p>}
            </div>
        </div>
    )
}