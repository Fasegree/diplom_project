import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAll, fetchProductsListByCategory } from "../../../asyncActions/products"
import ProductItem from "../ProductItem"
import { Link, useParams } from "react-router-dom"
import { removeProductByIdAction } from "../../../store/productsReducer"
import BtnCard from "../../../ui/Btns/BtnCard"
import { addToCartAction } from "../../../store/cartReducer"

import s from './ProductList.module.css'
import ButtonCard from "../../../ui/Btns/BtnCard"
import FilterPanel from "../../FilterPanel"

export default function ProductList({type}){

 
    const dispatch = useDispatch()
    const {id} = useParams();
    const { category, products } = useSelector((store) => store.products);

    
    useEffect(() => {
        if(type==='all'){
            dispatch(fetchProductsAll())
        }else{

            dispatch(fetchProductsListByCategory(id))
        }
    }, [type, id])
    const filteredProducts = products?.filter(el => el.isShow)

    console.log(category,products);
    return (
        <div className={` wrapper `}>            
            <h2>{category}</h2>
            <FilterPanel/>
            <div className="cardsList">
            
            {filteredProducts?.map(prod => {
                return (
                    <div  key={prod.id} >
                         
                        


                    <Link to={`/categories/${prod.categoryId}/${prod.id}`}>
                    <div key={prod.id}>
                        <ProductItem prod={prod} />
                    </div>
                    </Link>
                  </div>
                    
                )
            })}
            </div>
        </div>
    )
}


