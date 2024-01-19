import React, { useState } from 'react';
// import './BurgerMenu.css'; // Создайте CSS файл для стилей бургер-меню
import s from './Burger.module.css'
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.burgermenu}>
      <div className={`${s.burgericon} ${isOpen ? `${s.open}` : ''}`} onClick={toggleMenu}>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
      </div>
      {isOpen && (
        <div className={s.wrapper}>
        <div className={s.menu}>
          <ul>
            <li>Main Page</li>
            <li>Categories</li>
            <li>All products</li>
            <li>All sales</li>
          </ul>
        </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
