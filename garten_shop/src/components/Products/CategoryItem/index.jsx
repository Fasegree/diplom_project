import { useEffect } from "react";
import { fetchProductById } from "../../../asyncActions/products";
import BtnCard from "../../../ui/Btns/BtnCard";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryItem({id, title, price, discont_price, description, image, categoryId}){
    // const product = useSelector(store => store.products)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchProductById(id))
        
    // }, [])
    // console.log(product);
     return (
        <div>
            <div>
       
            </div>
            <p>{categoryId}</p>
            
        </div>
    )
}