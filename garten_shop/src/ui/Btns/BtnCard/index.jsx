import React, { useRef } from "react";
import s from "./BtnCard.module.css";
import { Link } from "react-router-dom";

export default function ButtonCard({action, title, widthBtn, btnLink}) {
    
    return (
      <div>
        <Link to={btnLink}>
        <button className={s.btn} onClick={(e) => {!btnLink && e.preventDefault(); if (action) action() } }  style={{width : widthBtn + 'px'}}> {title} </button>
        </Link>
      </div>
    );
}