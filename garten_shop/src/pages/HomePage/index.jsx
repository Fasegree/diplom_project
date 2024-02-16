import { useEffect, useRef } from "react";
import CategoriesList from "../../components/Products/CategoriesList";
import Title from "../../components/Title";
import ProductDiscount from "../../components/Products/ProductDiscount";
import DiscountOrderForm from "../../components/DiscountOrderForm/index";
import Recomend from "../../components/Recomend";
import { isPage } from "../../App";

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
            
            <div className="wrapper">

            <Title titleText={'Category'} btnText={`All categories`} btnLink={'/category/all'}/>
            </div>
            <CategoriesList type={isPage.home}/>
            <div className="wrapper">
            <DiscountOrderForm/>
            <div ref={saleRef}></div>
            <Title titleText={'Sale'} btnText={`All sales`} btnLink={'/discount'}/>
            <ProductDiscount type={isPage.home}/>
            </div>
        </div>
      
    )
}