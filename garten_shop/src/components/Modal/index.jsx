import { useDispatch } from "react-redux"
// import {changeOrderModal} from '../../store/modalSlice'

export default function() {
    const dispatch = useDispatch()
    return (
        <div className="">
            <div>
                <div className="header">
                    <p>Congratulations!</p>
                    {/* onClick={() => dispatch(changeOrderModal(false))} */}
                    <div >CLOSE MODAL WINDOW</div>
                </div>
                <p>Your order</p>
                <p>A manager will</p>
            </div>
        </div>
    )
}