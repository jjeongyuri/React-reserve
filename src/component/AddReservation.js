import { useState } from 'react';
import {BiRefresh} from 'react-icons/bi';

function AddSelect({formData,setFormData}){
    const [seatBy,setSeatBy] = useState(0);

    // switch문함수
    function start(e){
console.log(e)
        // console.log(formData.From)
        // const fromBy = formData.From;
        // console.log(fromBy)
        // switch(fromBy){
        //     case '인천ICN' : "ICN";
        //     break;
        //     case '대구TAE' : "TAE";
        //     break;
        //     case '울산USN' : "USN";
        //     break;
        //     case '부산PUS' : "PUS";
        //     break;
        //     case '청주CJJ' : "CJJ";
        //     break;
        //     case '광주KWJ' : "KWJ"
        //     break;
        // }
        // setFormData({...formData,From:e.target.value,CountryFrom:e.target.value})
    }
    console.log(start)
    // function seatStop(){
    //    if(setSeatBy === 0){
    //     return 0;
    //    }
    //    else if(setSeatBy === 9){
    //     return 9
    //    }
    // }

    return(
        <>
        {/* 1. */}
            <li>
                {/* <input type="text" 
                       placeholder="출발지"
                       onChange={(e)=>{setFormData({...formData,From:e.target.value,CountryFrom:e.target.value})}}/> */}
                <select onClick={(e)=>setFormData({...formData,From:e.target.value,CountryFrom:e.target.value})}>
                    <option >출발지</option>
                    <option >인천ICN</option>
                    <option >대구TAE</option>
                    <option >울산USN</option>
                    <option >부산PUS</option>
                    <option >청주CJJ</option>
                    <option >광주KWJ</option>
                </select>
                <span>
                    <BiRefresh/>
                </span>
               {/* <input type="text" 
                       placeholder="도착지"
                       onChange={(e)=>{setFormData({...formData,To:e.target.value,CountryTo:e.target.value})}}/> */}
                <select onClick={(e)=>{setFormData({...formData,To:e.target.value,CountryTo:e.target.value})}}>
                    <option>도착지</option>
                    <option>제주CJU</option>
                    <option>김포GMP</option>
                    <option>포항KPO</option>
                    <option>진주HIN</option>
                    <option>부산PUS</option>
                    <option>대구TAE</option>
                </select>
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
                     <button type='button'
                             onClick={()=>{setSeatBy(seatBy - 1)}}>-</button>
                     <input id="userAdualt"
                            value={seatBy}
                            
                            />
                     <button type='button'
                             onClick={()=>{setSeatBy(seatBy + 1)}}>+</button>
                    </dd>
                    <dd>
                     <label htmlFor="userChildren">소아</label>
                     <button type='button'>-</button>
                     <input id="userChildren"
                            value={seatBy}/>
                     <button type='button'>+</button>
                    </dd>
                    <dd>
                     <label htmlFor="userBaby">유아</label>
                     <button type='button'>-</button>
                     <input id="userBaby"
                            value={seatBy}/>
                     <button type='button'>+</button>
                    </dd>
                </dl> 
            </li>

            {/* 6. */}
            <li>
                <span>좌석등급 선택</span>
                <button type="button"
                        onClick={(e)=>{setFormData(e.target.value)}}>이코노미</button>
                <button type="button"
                        onClick={(e)=>{setFormData({...formData,seat:e.target.value})}}>비지니스</button>
                <button type="button"
                        onClick={(e)=>{setFormData({...formData,seat:e.target.value})}}>퍼스트</button>
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
      const [data,setData] = useState('출발지')
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
                       setFormData={setFormData}
                       data ={data}
                       onChangeWrite={onChangeWrite}/>

            <button type='button'
                    onClick={writePublish}>
                예매하기
            </button>
         </ul>
        </>
    )
}