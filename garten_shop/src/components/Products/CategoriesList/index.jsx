import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCatigoriesList } from '../../../asyncActions/products';
import { ROOT_URL } from '../../../App';
import s from './CategoriesList.module.css'

export default function CategoriesList({ page }) {
    let categories = useSelector(store => store.categories);
  categories = page === 'home' ? categories.categories.slice(0,-1) : categories.categories
  const dispatch = useDispatch();
  // !!!=======
  const { id } = useParams();
useEffect(() => {
      dispatch(fetchCatigoriesList()); 
  }, [id, page]);

  // console.log(page);

//===========
  return (
   
    <div className={`${s.categories} wrapper`}  style={{gridTemplateColumns: `repeat(${categories.length},1fr)`}}>
            {categories.map(cat => {
                return <Link key={cat.id} to={`/categories/${cat.id}`}>
                    <div  style={{backgroundImage: `url('${ROOT_URL+cat.image}')`}} className={s.categoryImg} key={cat.id}>
                       
                    </div>
                    <div className={s.categoryTxt}>{cat.title}</div>
                    </Link>
            })}
        </div>


  );
}

