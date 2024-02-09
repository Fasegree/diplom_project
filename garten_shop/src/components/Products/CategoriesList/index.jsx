import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCatigoriesList, fetchProductById } from '../../../asyncActions/products';
import { ROOT_URL } from '../../../App';
import s from './CategoriesList.module.css'
export default function CategoriesList({ type }) {
    let categories = useSelector(store => store.categories);
 
  const dispatch = useDispatch();
  // !!!=======
  const { id } = useParams();
useEffect(() => {
  window.scrollTo(0, 0);
     switch (type) {
      case 'category':
        if(id==='all'){
            dispatch(fetchCatigoriesList(type))
           
        } else {
            dispatch(fetchProductById(id))
         
        }
        break;
    case 'homeCategory':
        
        dispatch(fetchCatigoriesList(type));

    default:
        break;
     
     } 
  }, [id, type, dispatch]);


//===========
  return (
   
    <div className={`${s.categories} wrapper`}  style={{gridTemplateColumns: `repeat(${categories.length},1fr)`}}>
            {categories?.map(cat => {
                return <Link key={cat.id} to={`/categories/${cat.id}`}>
                    <div  style={{backgroundImage: `url('${ROOT_URL+cat.image}')`}} className={s.categoryImg} key={cat.id}>
                       
                    </div>
                    <div className={s.categoryTxt}>{cat.title}</div>
                    </Link>
            })}
        </div>


  );
}

