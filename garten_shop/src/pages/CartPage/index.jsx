import { useSelector } from "react-redux"
import ProductInCart from "../../components/Products/ProductInCart"
import s from "./CartPage.module.css"
import InputCoupon from "../../components/Coupon"
import Title from "../../components/Title"
import { useEffect } from "react"
import ButtonCard from "../../ui/Btns/BtnCard"

export default function CartPage() {
    const productsCart = useSelector(store => store.cart)

    useEffect(() => {
      window.scrollTo(0, 0)
    },[ getTotalPrice()===0 ])

    function getTotalPrice() {
     
    let  totalPrice = productsCart.reduce((acc, el) => {
          if(el.discont_price){
              return acc + (el.count * el.discont_price)
          }else {
              return acc + (el.count * el.price)
          }
      }, 0) 
      return totalPrice
  }
    
      return (
        <div className="container">
            <Title titleText={'Shopping cart'} btnText={'Back to the store'} btnLink={'/products/all'}/>
            {getTotalPrice() ? (
                <div>
                    <div className={s.orderDetiles}>
                        <h3>Order details</h3>
                        <div>
                            <p>{productsCart.length} items</p>
                            <div className={s.totalPrice}>
                                <p>Total</p>
                                <h2>${getTotalPrice()}</h2>
                            </div>
                        </div>
                        <InputCoupon page='cart'/>
                    </div>
                    <ProductInCart productsCart={productsCart}/>
                </div>
            ) : (
                <div>
                    <p>Looks like you have no items in your basket currently.</p>
                    <ButtonCard title={'Continue Shopping'} btnLink={'/products/all'}/>
                </div>
            )}
        </div>
    );
  }

  