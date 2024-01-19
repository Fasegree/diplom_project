import s from './BtnCard.module.css'

export default function( {action, btnText}){
    return (
        <div>
            <button className={s.btn} onClick={()=> action()} >{btnText}</button>
        </div>
    )
}