import { useDispatch, useSelector } from "react-redux";
import { filterBySaleAction } from "../../store/productsReducer";
import { useEffect, useRef } from "react";

export default function FilterPanel({type, id}){
    // const defaultSatte = [
    //     {id: 1, title: 'prod1', discount_price: null, isShow: true},
    //     {id: 2, title: 'prod2', discount_price: 10, isShow: true},
    //     {id: 3, title: 'prod3', discount_price: null, isShow: true},
    //     {id: 4, title: 'prod4', discount_price: null, isShow: true},
    // ]

    // sale [true]
    // state.products.filter(el => el.discount_price)
    // sale [false]
    // fetch()
    //LS
    //copy (slice() )

//====================================================

// filter checkbox

    // products.map(el => {
    //     if (!el.discount_price){
    //         el.isShow = false;
    //     }
    //     return el
    // })
    // products.map(el => ({...el, isShow: true}))
///============================================
const dispatch = useDispatch()
const products = useSelector(store => store.products);
const checkboxRef = useRef()
   function handleSaleBox(e){
        dispatch(filterBySaleAction(products))
    }
    // useEffect(() =>{
    //     if(type !=='sale'){
    //         checkboxRef.current.checked = false;
    //     }
    // }, [type, id])
    return (
        <div>
            <form action="">
                
            <span>Price</span>
            <input placeholder="from"/>
            <input placeholder="to"/>
            </form>
        {type !== 'sale' &&  <label>Discounted items

<input onClick={ handleSaleBox} type="checkbox" name="" id="" />
</label>}
           

            <span>Sorted</span>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}