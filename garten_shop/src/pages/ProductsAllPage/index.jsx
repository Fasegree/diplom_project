import FilterPanel from "../../components/FilterPanel";
import ProductList from "../../components/Products/ProductList";

export default function ProductsAllPage(){
    return(
        <div className="container">
            ProductsAllPage
            <FilterPanel/>
            <ProductList/>
        </div>
    )
}