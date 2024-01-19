import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../../asyncActions/products"

export default function(){

    const products = useSelector(store => store.produts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsList())
    }, [])
    console.log(products);
    return (
        <div>

        </div>
    )
}