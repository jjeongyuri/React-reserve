import AddInfo from "./AddInfo";
import AddReservation from "./AddReservation";
import {BiCheckCircle,BiDownArrow} from 'react-icons/bi';

export default function AddAll(){
    return(
        <>
         <div className="system">
            <h2>예약시스템</h2>
            <ul className="systemName">
                <li>왕복</li>
                <li>편도</li>
            </ul>
            <AddReservation/>
         </div>
         <div className="list">
            <div>
             <h2>예약확인</h2>
             <button type="button">
                <BiDownArrow/>
             </button>
             <ul className="select">
                 <li>탑승자명
                    <BiCheckCircle style={{marginLeft:'5px'}}/>
                 </li>
                 <li>좌석등급 선택
                    <BiCheckCircle style={{marginLeft:'5px'}}/>
                 </li>
             </ul>
            </div>
            <ul>
                <AddInfo/>
            </ul>
         </div>
        </>
    )
}