import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAll, fetchProductsList } from "../../../asyncActions/products"
import { Link } from "react-router-dom"
import ProductItem from "../ProductItem"
import FilterPanel from "../../FilterPanel"

export default function ProductDiscount({type}){

    const { category, products }  = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsAll(type))
        console.log(123)
    }, [])
    // let discountProducts = products?.filter(prod => prod.discont_price !== null);

    // // костыль на сторону reducera 
    // if (type === 'home' && discountProducts ) {
    //    discountProducts = discountProducts
    //                                     .map(product => ({
    //                                         ...product,
    //                                         discountPercentage: ((product.price - product.discont_price) / product.price) * 100
    //                                     }))
    //                                     .sort((a, b) => b.discountPercentage - a.discountPercentage)
    //                                     .slice(0, 4);
    // } else{

        //  discountProducts = discountProducts
    // }
    // const discountProducts = products.filter(prod => prod.discont_price)

    // console.log(discountProducts);
    return (
        <div>
            {/* <FilterPanel type={'sale'}/> */}
            <div className="cardsList">

            {products?.map(prod => {
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