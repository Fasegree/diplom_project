import React, { useRef } from "react";
import s from "./BtnCard.module.css";

export default function ButtonCard({action, title, widthBtn}) {
    
    return (
      <div>
        <button className={s.btn} onClick={(e) => {e.preventDefault();  action()} }  style={{width : widthBtn + 'px'}}> {title} </button>
      </div>
    );
}