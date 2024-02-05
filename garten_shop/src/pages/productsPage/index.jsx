import FilterPanel from "../../components/FilterPanel";
import CategoriesList from "../../components/Products/CategoriesList";
import ProductList from "../../components/Products/ProductList";

export default function ProductsPage({page}){
    console.log(page+ ' page');
    return(
        <div className="container">
            Categories Page
         
            <CategoriesList page={page}/>
        </div>
    )
}