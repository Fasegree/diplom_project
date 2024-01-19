import s from './Title.module.css'

export default function Title({titleText, btnText}){
    return (
        <div className={`wrapper ${s.title}`}>
            <h3> {titleText} </h3>
            <div className={s.lineContainer}>

            <div className={s.line}></div>
            </div>
            <button> {btnText} </button>
        </div> 
    )
}