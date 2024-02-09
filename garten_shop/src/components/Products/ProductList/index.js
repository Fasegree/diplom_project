import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { Link, useParams } from "react-router-dom";
import s from './ProductList.module.css';
import FilterPanel from "../../FilterPanel";
import { fetchProductsAll } from "../../../asyncActions/products";

export default function ProductList({type='all'}) {
    const { category, products } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        switch (type) {
            case 'all':
            case 'sale':
            case 'homeSale':
                dispatch(fetchProductsAll(type));
                break;
            default:
                break;
        }
    }, [type, id, dispatch]);

//    
    console.log(products);
    return (
        <div className='container'>            
            <h2 className={s.titleCategory}>{category}</h2>
            <FilterPanel type={category==='Discounted items' ? 'sale': ''}/>
            <div className="cardsList">
               
                {products?.length > 0 && products.map(prod => (

                    prod?.isShowFrom && prod?.isShowTo && prod?.isShowSale &&
                        <div key={prod.id}>
                            <Link to={`/categories/${prod.categoryId}/${prod.id}`}>
                                {/* <ProductItem prod={prod} /> */}
                            </Link>
                        </div>
                ))}
            </div>
        </div>
    );
}
