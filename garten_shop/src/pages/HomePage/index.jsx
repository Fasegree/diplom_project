import { useEffect, useRef } from "react";
import DiscountOrderForm from "../../components/DiscountOrderForm";
import CategoriesList from "../../components/Products/CategoriesList";
import Recomend from "../../components/Recomend";
import Title from "../../components/Title";
import ProductDiscount from "../../components/Products/ProductDiscount";

export default function HomePage(){
    const saleRef = useRef();
    const handleClick = () => {
        
        saleRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return(
        <div className="container">
            <Recomend handleClick={handleClick} />
            <Title titleText={'Category'} btnText={`All categories`} btnLink={'/category/all'}/>
            <CategoriesList page='home'/>
            <DiscountOrderForm/>
            <div ref={saleRef}></div>
            <Title titleText={'Sale'} btnText={`All sales`} btnLink={'/discount'}/>
            <ProductDiscount page='home'/>
        </div>
      
    )
}