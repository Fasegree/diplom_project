import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ProductsAllPage from './pages/ProductsAllPage';
import ProductsOfCategoryPage from './pages/ProductsOfCategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/productsPage';

export const ROOT_URL = 'http://localhost:3333'
// export const ROOT_URL = 'https://project-fe-vxeu.onrender.com'

function App() {

  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
       <Route path='/products/all'  element={<ProductsAllPage type='all' />}/>
        <Route path='/discount' element={<ProductsAllPage type='sale'/>}/> // products/all with filter
      
        <Route path='/category/:id' element={<ProductsPage type='category' />}/>
        <Route path='/categories/:categoryID' element={<ProductsOfCategoryPage/>}/>
        <Route path='/categories/:categoryID/:product_id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;