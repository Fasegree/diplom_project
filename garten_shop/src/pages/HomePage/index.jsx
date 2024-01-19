import DiscountOrderForm from "../../components/DiscountOrderForm";
import Recomend from "../../components/Recomend";
import Title from "../../components/Title";

export default function HomePage(){
    return(
        <div>
            <Recomend/>
            <Title titleText={'Category'} btnText={`All categories`}/>
            <DiscountOrderForm/>
            <Title titleText={'Sale'} btnText={`All sales`}/>
        </div>
    )
}