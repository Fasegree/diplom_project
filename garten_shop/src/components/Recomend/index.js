import BtnCard from "../../ui/Btns/BtnCard";
import s from './Recomend.module.css'

export default function Recomend(){
    function scrollByKey(){
        console.log('scroll');
    }
    return(
        <div className={s.content}>
            <div className="wrapper">
            <h1>Amazing Discounts <br/> on Garden Products!</h1>
            <BtnCard action={scrollByKey} btnText='CheckOut'/>
            </div>
        </div>
    )
}