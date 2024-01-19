import BtnBanner from '../../ui/Btns/BtnBanner'
import s from './DiscountOrderForm.module.css'
import discountImg from './media/image.png'

export default function DiscountOrderForm(){
    const getFormData = (e) => {
        e.preventDefault()
        console.log('formData');
    }
    return (
        <div className="wrapper">
            <form className={s.form} onSubmit={(e) => getFormData(e)}>
                    <h2> 5% off on the first order</h2>
                <div className={s.content}>
                    <div className={s.img}>
                    <img src={discountImg} alt="dicount"/>
                    </div>
                    <div className={s.inputs}>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Phone namber' />
                        <input type="text" placeholder='Email' />
                        <BtnBanner  btnText='Get a discount'/>
                    </div>
                </div>
            </form>
        </div>
    )
}