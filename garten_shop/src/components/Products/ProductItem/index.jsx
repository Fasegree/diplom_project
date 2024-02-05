import { useEffect } from "react";
import { fetchProductById } from "../../../asyncActions/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, removeFromCart } from "../../../store/cartReducer";
import s from './ProductItem.module.css'
import ButtonCard from "../../../ui/Btns/BtnCard";
import { ROOT_URL } from "../../../App";

export default function ProductItem({ prod }) {
    const product = useSelector(store => store.products)
    const dispatch = useDispatch()

    const { id, title, price, discont_price, description, image, categoryId } = prod
    console.log(product);


    return (
        <div className={s.productCard}>
            {discont_price && <div className={s.discount}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</div>}
            <div className={s.imageBtn}>
                <div className={s.productsImg} style={{ backgroundImage: `url(${ROOT_URL}/${image})` }} ></div>

                <div className={s.btnAdd}>
                    <ButtonCard
                        title={'Add to 1'}
                        action={() => dispatch(addToCartAction(prod))}
                        widthBtn='284'
                    />

                </div>

               
            </div>
            <div className={s.cardInfo}>
                <p className={s.cardTitle}>{title}</p>
                <div className={s.cardPrice}>
                    {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
                    {discont_price && <p className={s.oldPrice}>${price}</p>}

                </div>

            </div>
        </div>
    )
}