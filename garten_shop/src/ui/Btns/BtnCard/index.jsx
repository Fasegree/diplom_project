import React, { useRef, useState } from "react";
import s from "./BtnCard.module.css";
import { Link } from "react-router-dom";
import { isPage } from "../../../App";


export default function ButtonCard({action, title, widthBtn, btnLink, type}) {
  const [newTitle, setNewTitle] = useState(title);
 
  function changeStyle(e){   
    !btnLink && e.preventDefault();
    action && action();
    let oldTitle = title
    if (action && type !== isPage.home) {
      setNewTitle('Added')
    }
    setTimeout(() => {
    setNewTitle(oldTitle)
    }, 1000);
  }
  
    console.log(action);
    return (
      <div>
        <Link to={btnLink}>
        <button className={ newTitle === 'Added' ? s.btnAdded : s.btn } onClick={(e) => {changeStyle(e)} }  style={{width : widthBtn + 'px'}}> 
          { newTitle } 
        </button>
        </Link>
      </div>
    );
}