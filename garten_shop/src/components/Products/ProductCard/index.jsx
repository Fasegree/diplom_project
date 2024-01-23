import { useEffect } from "react";
import { fetchProductById } from "../../../asyncActions/products";
import BtnCard from "../../../ui/Btns/BtnCard";
import { useDispatch, useSelector } from "react-redux";
import s from './ProductCard.module.css'

export default function ProductCard({id,  categoryId}){
    const product = useSelector(store => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductById(id))
        
    }, [])
    console.log(product);
     return (
        <div>
            ProductCard
            <div>
                {/* <img src={`http://localhost:3333/${image}`}  alt={title}/> */}
            <BtnCard btnText={'Add to cart'}  action={''}/>
            </div>
            <p>{title}</p>
            <p> price: {price}</p>
            {discont_price && <p> discont_price: {discont_price}</p>}
            {discont_price && <div className="discount">{`-${Math.round(100-discont_price*100/price)}%`}</div>}
            prod 
        </div>
    )
}