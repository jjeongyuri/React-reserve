import { useState } from 'react';
import {BiRefresh} from 'react-icons/bi';

function AddSelect({formData,setFormData}){
    return(
        <>
        {/* 1. */}
            <li>
                <input type="text" 
                       placeholder="출발지"
                       onChange={(e)=>{setFormData({...formData,From:e.target.value,CountryFrom:e.target.value})}}/>
                <span>
                    <BiRefresh/>
                </span>
                <input type="text" 
                       placeholder="도착지"
                       onChange={(e)=>{setFormData({...formData,To:e.target.value,CountryTo:e.target.value})}}/>
            </li>

            {/* 2. */}
            <li>
                <label htmlFor="userName">탑승자명</label>
                <input type="text" 
                       id="userName"
                       onChange={(e)=>{setFormData({...formData,passengerName:e.target.value})}}/>
            </li>

            {/* 3. */}
            <li>
                <label htmlFor="userTime">탑승시간</label>
                <input type="time" 
                       id="userTime"
                       onChange={(e)=>{setFormData({...formData,boardingTime:e.target.value})}}/>
            </li>

            {/* 4. */}
            <li>
                <label htmlFor="userDate">탑승일</label>
                <input type="date" 
                       id="userDate"
                       onChange={(e)=>{setFormData({...formData,boardingDate:e.target.value})}}/>
            </li>

            {/* 5. */}
            <li>
                <dl>
                    <dt>탑승인원 선택</dt>
                    <dd>
                     <label htmlFor="userAdualt">성인</label>
                     <button type='button'>-</button>
                     <input id="userAdualt"/>
                     <button type='button'>+</button>
                    </dd>
                    <dd>
                     <label htmlFor="userChildren">소아</label>
                     <button type='button'>-</button>
                     <input id="userChildren"/>
                     <button type='button'>+</button>
                    </dd>
                    <dd>
                     <label htmlFor="userBaby">유아</label>
                     <button type='button'>-</button>
                     <input id="userBaby"/>
                     <button type='button'>+</button>
                    </dd>
                </dl> 
            </li>

            {/* 6. */}
            <li>
                <span>좌석등급 선택</span>
                <button type="button">이코노미</button>
                <button type="button">비지니스</button>
                <button type="button">퍼스트</button>
            </li>
        </>
    )
}

export default function AddReservation({onChangeWrite}){
    // reset객체
    const resetData = {
        passengerName:"",
        seat:"",
        boardingTime:"",
        From:"",
        CountryFrom:"",
        To:"",
        CountryTo:"",
        boardingDate:""
      }
    
    // useState만들기
    const [formData,setFormData] = useState(resetData);

    // 데이터 보낼 함수만들기
    function writePublish(){
        const write = {
            id:"",
            passengerName:formData.passengerName,
            seat:formData.seat,
            boardingTime:formData.boardingTime,
            From:formData.From,
            CountryFrom:formData.CountryFrom,
            To:formData.To,
            CountryTo:formData.CountryTo,
            boardingDate:formData.boardingDate 
        }

        // 데이터 보내기
        onChangeWrite(write)
        // reset
        setFormData(resetData);
    }

    return(
        <>
         <ul className="reserve">
            <AddSelect formData={formData}
                       setFormData={setFormData}/>

            <button type='button'
                    onClick={writePublish}>
                예매하기
            </button>
         </ul>
        </>
    )
}