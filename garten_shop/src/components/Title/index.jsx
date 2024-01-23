import { Link } from 'react-router-dom'
import s from './Title.module.css'

export default function Title({titleText, btnText, btnLink}){
    return (
        <div className={`wrapper ${s.title}`}>
            <h3> {titleText} </h3>
           
            <Link to={btnLink}>

            <button> {btnText} </button>
            </Link>
            <div className={s.lineContainer}>
                {/* <div className={s.line}></div> */}
            </div>
        </div> 
    )
}