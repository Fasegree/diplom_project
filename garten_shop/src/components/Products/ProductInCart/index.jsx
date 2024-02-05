import React, { useEffect } from 'react'
import s from './ProductInCart.module.css'
import { ROOT_URL } from '../../../App'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsAll } from '../../../asyncActions/products';
import ProductItem from '../ProductItem';
import { addToCartAction, removeFromCart } from '../../../store/cartReducer';



export default function ProductInCart({productsCart}) {
  
  const dispatch = useDispatch()
  const { id } = useParams();
  // const  products  = useSelector(store => store.cart);
  // const { category, products } = useSelector((store) => store.cart);


  useEffect(() => {

    

  }, [])
  // console.log(products);
  
  return (
    <div className={s.cardsWrapper}>
      {productsCart?.map(prod => {
        console.log(prod);
        return (
          <div key={prod.id} className={s.cardWrapper} >
            <div className={s.close}>X</div>
            <div className={s.img} style={{ backgroundImage: `url(${ROOT_URL}/${prod.image})` }}></div>
            {/* // style={{backgroundImage: `url(${ROOT_URL}/${image})`}} */}
            <div className={s.cardInfo}>
           
                <div className={s.title}>{prod.title}</div>


              <div className={s.controllAll}>
                <div className={s.control}>
                  <button onClick={() => dispatch(removeFromCart(prod))}>-</button>
                  <p>{prod.count}</p>
                  <button onClick={() => dispatch(addToCartAction(prod))}>+</button>
                </div>

                <div className={s.cardPriceContainer}>
                  <div className={s.cardPrice}>
                    {prod.discont_price ? <p className={s.currentPrice}> ${prod.discont_price}</p> : <p className={s.currentPrice}> ${prod.price}</p>}
                    {prod.discont_price && <p className={s.oldPrice}>${prod.price}</p>}
                  </div>
                </div>


              </div>

            </div>

          </div>




        )
      })}



    </div>
  )
}
