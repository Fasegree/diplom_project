import s from './NotFoundPage.module.css'
import img4 from './media/4.svg'
import img0 from './media/0.png'
import BtnCard from '../../ui/Btns/BtnCard'

export default function NotFoundPage(){
    return(
        <div className="container">

        <div className={s.container}>
            NotFoundPage
            <div className={s.img404}>
                <div ><img src={img4} alt="404" /></div>
                <div ><img src={img0} alt="404" /></div>
                <div ><img src={img4} alt="404" /></div>
            </div>
            <div className={s.text}>
            <h3>Page Not Found</h3>
                <p> We’re sorry, the page you requested could not be found.</p>
                <p>Please go back to the homepage. </p>
                <BtnCard action={''} btnText={'Go home'}/>
            </div>
        </div>
        </div>
    )
}