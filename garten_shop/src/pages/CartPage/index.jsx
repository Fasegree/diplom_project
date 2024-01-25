import { useSelector } from "react-redux"


export default function CartPage() {
    const productsCart = useSelector(store => store.cart)
    return (
        <div className="container">
            CartPage
            {productsCart.map(prod => {
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
            })}
        </div>
    )
}