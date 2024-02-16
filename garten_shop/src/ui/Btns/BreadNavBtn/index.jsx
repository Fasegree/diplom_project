import React from 'react'
import s from './BreadNavBtn.module.css'
export default function BreadNavBtn({title}) {
  return (
    <div>
        <button className={s.breadNavBtn}>{title}</button>
    </div>
  )
}
