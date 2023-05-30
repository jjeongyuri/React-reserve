import { useState } from "react";
import AddInfo from "./AddInfo";
import AddReservation from "./AddReservation";
import {BiCheckCircle,BiDownArrow} from 'react-icons/bi';

function AddList({toggle,sortBy,onChangeSort}){
    if(!toggle){
        return null;
    }
    return(
         <ul className="select">
           <li onClick={()=>{onChangeSort('passengerName')}}>
               탑승자명  
               {sortBy === 'passengerName' && <BiCheckCircle 
                                              style={{
                                              marginLeft:'5px'
                                              }}/>}
           </li>

           <li onClick={()=>{onChangeSort('boardingDate')}}>
            날짜순 
            {sortBy === 'boardingDate' && <BiCheckCircle 
                                               style={{
                                               marginLeft:'5px'
                                               }}/>}  
           </li>

           <li onClick={()=>{onChangeSort('boardingTime')}}>
            시간순
            {sortBy === 'boardingTime' && <BiCheckCircle 
                                               style={{
                                               marginLeft:'5px'
                                               }}/>}
           </li>
         </ul>
    )
}

export default function AddAll({list,setList,sortBy,onChangeSort,dataChange}){
    // console.log(dataChange)
    const [toggle,setToggle] = useState(false);

    return(
        <>
         <div className="system">
            <h2>예약시스템</h2>
            <ul className="systemName">
                <li>
                    <button type="button">왕복</button>
                </li>
                <li>
                    <button type="button">편도</button>
                </li>
            </ul>
            <AddReservation/>
         </div>
         <div className="list">
            <div>
             <h2>예약확인</h2>
             <button type="button"
                     onClick={()=>setToggle(!toggle)}>
                <BiDownArrow/>
             </button>
             <AddList toggle={toggle}
                      sortBy={sortBy}
                      onChangeSort={onChangeSort}/>
            </div>
            <ul>
                {dataChange.map((item)=><AddInfo 
                                         key={item.id}
                                         info={item}
                                         onDelete={(myId)=>setList(
                                            list.filter((item)=>{
                                                return item.id !== myId
                                            })
                                         )}/>)}
            </ul>
         </div>
        </>
    )
}