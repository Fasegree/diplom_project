import React, { useEffect } from 'react';
import s from './Coupon.module.css';
import ButtonCard from '../../ui/Btns/BtnCard';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { isPage } from '../../App';

export default function InputCoupon({ page, action }) {
  const  {isGetCoupon}  = useSelector(store => store.isAdd)
  const { register, handleSubmit } = useForm();
  console.log(isGetCoupon);

  useEffect(() => {

  },[isGetCoupon])


  const onSubmit = async (data) => {
    try {
      const response = await fetch(isPage.home ? 'http://localhost:3333/sale/send' : 'http://localhost:3333/order/send ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        action && action();
        alert('Ваш купон успешно отправлен!');
        
        console.log(response);
        console.log(data);
      } else {
        alert('Произошла ошибка при регистрации пользователя!');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div>
      <form className={`${s.discount_form} ${page === isPage.cart ? s.blackPlaceholder : s.discountInput}`} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={s.discountInput}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        
          {...register('name', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 3,
              message: ''
            }
          })}
        />
        <input
          className={s.discountInput}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
        
          {...register('phone', {
            required: 'Поле обязательно к заполнению',
          })}
        />
        <input
          className={s.discountInput}
          type="email"
          id="email"
          name="email"
          placeholder="Email"

          {...register('email', {
            required: 'Поле обязательно к заполнению',
          })}
        />
        {page === isPage.cart ? (
          <ButtonCard title="Order" widthBtn="484" action={action} />
        ) : (
          <button className={isGetCoupon ?  s.disabledBtn: s.couponBtn}  disabled={isGetCoupon} type="submit">
            {isGetCoupon ? "Request Submitted" : "Get a discount"}
          </button>
        )}
      </form>
    </div>
  );
}
