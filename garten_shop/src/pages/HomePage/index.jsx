import DiscountOrderForm from "../../components/DiscountOrderForm";
import CategoriesList from "../../components/Products/CategoriesList";
import Recomend from "../../components/Recomend";
import Title from "../../components/Title";

export default function HomePage(){
    return(
        <div>
            <Recomend/>
            <Title titleText={'Category'} btnText={`All categories`} btnLink={'/categories'}/>
            <CategoriesList page='home'/>
            <DiscountOrderForm/>
            <Title titleText={'Sale'} btnText={`All sales`} btnLink={'/discount'}/>
        </div>
    )
}