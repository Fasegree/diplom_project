import { useForm } from 'react-hook-form'
import BtnBanner from '../../ui/Btns/BtnBanner'
import s from './DiscountOrderForm.module.css'
import discountImg from './media/image.png'
import InputCoupon from '../Coupon'

export default function DiscountOrderForm(){
 
    return (
        <div className="wrapper">
            {/* <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2> 5% off on the first order</h2>
                <div className={s.content}>
                    <div className={s.img}>
                         <img src={discountImg} alt="dicount"/>
                    </div>
                    <form className={s.inputs}>
                        <input className={errors.firstName && s.inputError} {...firstNameInput} type="text" placeholder='Name' />
                        <input className={errors.phone && s.inputError} {...phoneInput} type="text" placeholder='Phone namber' />
                        <input className={errors.email && s.inputError} {...emailInput} type="text" placeholder='Email' />
                        <BtnBanner  btnText='Get a discount'/>
                    </form>
                </div>
            </form> */}

            <div className={s.dicountOrderForm}> 
                    <h2> 5% off on the first order</h2>
                    <div>
                        <div className={s.handsImg}>
                         <img src={discountImg} alt="dicount"/>
                        </div>
                        <div className={s.form}>

                        <InputCoupon />
                        </div>

                    </div>

                   
           
            </div>
        </div>
    )
}