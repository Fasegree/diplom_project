import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { Link, useParams } from "react-router-dom";
import s from './ProductList.module.css';
import FilterPanel from "../../FilterPanel";
import { fetchProductsAll } from "../../../asyncActions/products";
import { isPage } from "../../../App";

export default function ProductList({type}) {
    const { category, products } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
 
                dispatch(fetchProductsAll(type));
  
        
    }, [type, id, dispatch]);


    return (
        <div className='container'>    
            <h2 className={s.titleCategory}>{category}</h2>
            <FilterPanel type={category==='Discounted items' ? isPage.sale: ''}/>
            <div className={s.cardsContainer} >
                <div className="cardsList">

                {products?.length > 0 && products.map(prod => (

                    prod?.isShowFrom && prod?.isShowTo && prod?.isShowSale &&
                        <div key={prod.id}>
                            <Link to={`/categories/${category}/${prod.id}`}>
                                <ProductItem prod={prod} />
                            </Link>
                        </div>
                ))}
                </div>
               
            </div>
        </div>
    );
}
