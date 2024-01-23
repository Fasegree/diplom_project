import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../asyncActions/products"
import { Link, useParams } from "react-router-dom"

export default function ProductsOfCategoryPage(){
    const  {category} =useParams()
    const products = useSelector(store => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        const postfix = `/categories/${category}`
        console.log(category);
        dispatch(fetchProductsList(postfix))
    },[])
    console.log(products);
    return(
        <div>
            ProductsOfCategoryPage
            {products.map(prod => 
                            <Link to={`/categories/${prod.categoryId}/${prod.id}`}>
                                <div>
                                        <p>{prod.title}</p>
                                        <p>{prod.price}</p>
                                 </div>
                            </Link>
                                )}
        </div>
    )
}