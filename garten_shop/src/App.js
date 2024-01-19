import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsAllPage from './pages/ProductsAllPage';
import ProductsDiscountedPage from './pages/ProductsDiscountedPage';
import ProductsOfCategoryPage from './pages/ProductsOfCategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/products' element={<ProductsAllPage/>}/>
        <Route path='/discount' element={<ProductsDiscountedPage/>}/> // products/all with filter
        <Route path='/categories/:category' element={<ProductsOfCategoryPage/>}/>
        <Route path='/categories/:category/:product_id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
