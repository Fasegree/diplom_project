import { useEffect } from "react";
import { fetchProductById, fetchProductsAll } from "../../../asyncActions/products";
import BtnCard from "../../../ui/Btns/BtnCard";
import { useDispatch, useSelector } from "react-redux";
import s from './ProductCard.module.css'
import { ROOT_URL } from "../../../App";

export default function ProductCard({id,  categoryId}){
    const product = useSelector(store => store.products)
    const dispatch = useDispatch()
    id = 5;
    useEffect(() => {
        dispatch(fetchProductById(id))
        // dispatch(fetchProductsAll())
        
    }, [])
    console.log(product);
   
    const {discont_price, price, title,image, description} = product;
  const discount = 0;
     return (
        <div>
            ProductCard
            <div>
                <div style={{backgroundImage: `url(${ROOT_URL}/${image})`}}></div>
                <div className={s.productInfo}>
                    <h3>{title}</h3>
                    <div className={s.priceContainer}>
                        <h2>{discont_price}</h2>
                        <h3>$ {price}</h3>
                        <p>-{discount}%</p>
                    </div>
                    <div className={s.control}>
                    <BtnCard title={'Add to cart'}  action={''}/>
                    </div>
                    <div className={s.descriptions}>
                        <p>Description:</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>



            <div>
                {/* <img src={`http://localhost:3333/${image}`}  alt={title}/> */}
            
            </div>
            <p>{title}</p>
            <p> price: {price}</p>
            {discont_price && <p> discont_price: {discont_price}</p>}
            {discont_price && <div className="discount">{`-${Math.round(100-discont_price*100/price)}%`}</div>}
            prod 
        </div>
    )
}