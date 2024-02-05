import { useEffect } from "react";
import FilterPanel from "../../components/FilterPanel";
import ProductList from "../../components/Products/ProductList";
import ProductDiscount from "../../components/Products/ProductDiscount";
import CategoriesList from "../../components/Products/CategoriesList";

export default function ProductsAllPage({type}){
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    switch (type) {
        // all products 
        case 'all':
            return(
                <div className="container">
                    ProductsAllPage!!!!!!!!!!!!!!!!!!!!!!!!!!
                
                    <ProductList type={'all'}/>
                </div>
            )
            
        // discounted products
        case 'sale':
            return(
                <div className="container">
                    ProductsDiscountedPage!!!!!!!!!!!!!!!!!!!!!!!!!!!
                
                    <ProductDiscount/>
                </div>
            )
        // category products
        case 'category':
            return(
                <div className="container">
                    Categories Page
                    <CategoriesList type={type}/>
                </div>
            )
          
    
        default:
            break;
    }
    
}