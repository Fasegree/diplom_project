import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAll, fetchProductsList } from "../../../asyncActions/products"
import { Link } from "react-router-dom"
import ProductItem from "../ProductItem"
import FilterPanel from "../../FilterPanel"

export default function ProductDiscount({page}){

    const { category, products }  = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsAll())
    }, [])
    let discountProducts = products?.filter(prod => prod.discont_price !== null);
    console.log(discountProducts);
    // костыль 
    if (page === 'home' && discountProducts ) {
       discountProducts = discountProducts
                                        .map(product => ({
                                            ...product,
                                            discountPercentage: ((product.price - product.discont_price) / product.price) * 100
                                        }))
                                        .sort((a, b) => b.discountPercentage - a.discountPercentage)
                                        .slice(0, 5);
    } else{

         discountProducts = discountProducts
    }
    // const discountProducts = products.filter(prod => prod.discont_price)

    console.log(discountProducts);
    return (
        <div>
            <FilterPanel type={'sale'}/>
            <div className="cardsList">

            {discountProducts?.map(prod => {
                return (
                    <div key={prod.id}>

                        <Link  to={`/categories/${prod.categoryId}/${prod.id}`}>
                    
                        <ProductItem prod={prod} />
                    </Link>
                    </div>
                    )
            })}
            </div>
        </div>
    )
}