import { useDispatch, useSelector } from "react-redux"
import ProductInCart from "../../components/Products/ProductInCart"
import s from "./CartPage.module.css"
import InputCoupon from "../../components/Coupon"
import ProductCard from "../../components/Products/ProductCard"
import { ROOT_URL } from "../../App"
import { addToCartAction, removeFromCart } from "../../store/cartReducer"

export default function CartPage() {
    const productsCart = useSelector(store => store.cart)
    const dispatch = useDispatch()
    return (
        <div className="container">
            CartPage
            {/* <ProductCard id={2}/> */}
            <div className={s.orderDetiles}>
                    <h3>Order details</h3>
                <div>
                    <p>3 items</p>
                    <div className={s.totalPrice}>
                        <p>Total</p>
                        <h2>$541,00</h2>
                    </div>
                </div>
                <InputCoupon page='cart'/>
            </div>
            <ProductInCart productsCart={productsCart}/>
            {/* {productsCart.map(prod => {
                return (
                    <div>

                        <span>
                            {prod.title}
                        </span>
                        <span>
                            {prod.count}
                        </span>
                    </div>
                )
            })} */}

{/* {productsCart?.map(prod => {
        console.log(prod);
        return (
          <div key={prod.id} className={s.cardWrapper} >
            <div className={s.close}>X</div>
            <div className={s.img} style={{ backgroundImage: `url(${ROOT_URL}/${prod.image})` }}></div>
   
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
      })} */}

        </div>
    )
}