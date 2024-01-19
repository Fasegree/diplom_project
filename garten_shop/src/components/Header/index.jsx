import s from './Header.module.css'
import { Link } from 'react-router-dom'


import logo from './media/logo.svg'
import cart from './media/cart.svg'
import BurgerMenu from './Burger'

export default function Header(){
    return(
        <div className={s.header}>
            <div className={s.logo}><img src={logo} alt='logo'/></div>
            <div className={s.navMenu}>
                <ul className={s.nav}>
                    <Link to={'/'}><li>Main Page</li></Link>
                    <Link to={'/categories'}><li>Categories</li></Link>
                    <Link to={'/products'}><li>All products</li></Link>
                    <Link to={'/discount'}> <li>All sales</li></Link>                   
                </ul>
            </div>
            <div className={s.cartArea}>

            <div className={s.cart}>
                <div className={s.countInCart}>12</div>
                <img src={cart} alt="cart"/>
                
            </div>
                <BurgerMenu className={s.BurgerMenu}/>
            </div>
        </div>
    )
}