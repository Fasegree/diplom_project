import { useForm } from 'react-hook-form'
import BtnBanner from '../../ui/Btns/BtnBanner'
import s from './DiscountOrderForm.module.css'
import discountImg from './media/image.png'

export default function DiscountOrderForm(){
    let {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm()

    let onSubmit = (data) => {
        console.log(data);
        // вызов модального окна
        reset()
    }

    let firstNameInput = register('firstName', {
        required: 'Поле обязательно к заполнению',
        minLength: {
            value: 3,
            message: ''
        }
    })

    let phoneInput = register('phone', {
        required: 'Поле обязательно к заполнению',
        // minLength: {
        //     value: 12,
        //     message: ''
        // },
        // pattern: {
        //     value: /\+\d{6,20}/ ,
        //     message: ''
        // }
    })

    let emailInput = register('email', {
        required: 'Поле обязательно к заполнению',
        // pattern: {
        //     value: /\+\d{6,20}/ ,
        //     message: ''
        // }
    })


    return (
        <div className="wrapper">
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2> 5% off on the first order</h2>
                <div className={s.content}>
                    <div className={s.img}>
                    <img src={discountImg} alt="dicount"/>
                    </div>
                    <div className={s.inputs}>
                        <input className={errors.firstName && s.inputError} {...firstNameInput} type="text" placeholder='Name' />
                        <input className={errors.phone && s.inputError} {...phoneInput} type="text" placeholder='Phone namber' />
                        <input className={errors.email && s.inputError} {...emailInput} type="text" placeholder='Email' />
                        <BtnBanner  btnText='Get a discount'/>
                    </div>
                </div>
            </form>
        </div>
    )
}