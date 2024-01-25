import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ROOT_URL, fetchCatigoriesList,  } from "../../../asyncActions/products"
import { Link } from "react-router-dom"
import s from "./CategoriesList.module.css"


export default function CategoriesList(page='0'){

    // const categoriesAll = '/categories/all'
    const categories1 = useSelector(store => store.categories)
    console.log( page.page);
    const categories = (page.page !=='home') ? categories1 : categories1.slice(0,4)
    const countCountColumn = (page.page !=='home') ? categories1.length : 4
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCatigoriesList()) 
        console.log();
    }, [])
    
    console.log(categories);
    return (
        <div className={`${s.categories} wrapper`} style={{gridTemplateColumns: `repeat(${countCountColumn},1fr)`}}>
            {categories.map(prod => {
                return <Link key={prod.id} to={`/categories/${prod.id}`}>
                    <div  style={{backgroundImage: `url('${ROOT_URL+prod.image}')`}} className={s.categoryImg} key={prod.id}>
                       
                    </div>
                    <div className={s.categoryTxt}>{prod.title}</div>
                    </Link>
            })}
        </div>
    )
}
