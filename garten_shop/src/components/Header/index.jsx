import s from './Header.module.css'
import { Link } from 'react-router-dom'


import logo from './media/logo.svg'
import cart from './media/cart.svg'
import BurgerMenu from './Burger'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../BreadCrumbs'
import { isPage } from '../../App'

export default function Header(){
    // проверка корзины и добавление countInCart useEffect(()=>{ fetch(cart)},[state.cart])
   const dispatch = useDispatch()
   const productInCart = useSelector(state => state.cart)
 
     const countInCart = productInCart.reduce((acc,el) =>acc + el.count,0)



    
    return(
        <div className='container'>

        <div className={s.header }>
            <Link to={'/'}>

            <div className={s.logo}><img src={logo} alt='logo'/></div>
            </Link>
            <div className={s.navMenu}>
                <ul className={s.nav}>
                    <Link to={'/'}><li>Main Page</li></Link>
                   
                    <Link to={'/category/all'} type={isPage.all}><li>Categories</li></Link>
                    <Link to={'/products/all'} type={isPage.all}><li>All products</li></Link>
                    
                    <Link to={'/discount'}> <li>All sales</li></Link>                   
                </ul>
            </div>
            <div className={s.cartArea}>
            <Link to={'/cart'}> 
            <div className={s.cart}>
                { countInCart !==0 && <div className={s.countInCart}>{countInCart}</div>}
                <img src={cart} alt="cart"/>
                
            </div>
            </Link>
                <BurgerMenu className={s.BurgerMenu}/>
            </div>
        </div>
        <Breadcrumbs/>
        </div>
    )
}