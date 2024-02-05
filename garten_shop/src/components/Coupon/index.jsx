import React from 'react';
import s from './Coupon.module.css';
import ButtonCard from '../../ui/Btns/BtnCard';
import { useForm } from 'react-hook-form';

export default function InputCoupon({ page}) {
    const inputStyles = {
      '::placeholder': {
        color: page === 'cart' ? 'black' : 'your_other_color_here',
      },
    };

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

    })

    let emailInput = register('email', {
        required: 'Поле обязательно к заполнению',
  
    })

 
 
    
      const onSubmit1 = (data, e) => {
        e.preventDefault(); // Предотвращение стандартного поведения отправки формы
        handleSubmit(onSubmit)(); // Передача функции onSubmit напрямую
        console.log(data);
      };
  
    return (
      <div>
        <form onClick={(e) => onSubmit1(e)} className={`${s.discount_form} ${page === 'cart' ? s.blackPlaceholder : s.discountInput}`}>
          <input
            className={s.discountInput}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            style={inputStyles}
          />
          <input
            className={s.discountInput}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            style={inputStyles}
          />
          <input
            className={s.discountInput}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            style={inputStyles}
          />
          {page === 'cart' ? (
            <ButtonCard  title="Order" widthBtn="484" />
          ) : (
            <button  className={s.couponBtn} type="submit">
              Get a discount
            </button>
          )}
        </form>
      </div>
    );
  }
  