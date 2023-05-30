import {BiRefresh} from 'react-icons/bi';

function AddSelect(){
    return(
        <>
        {/* 1. */}
            <li>
                <input type="text" placeholder="출발지"/>
                <span>
                    <BiRefresh/>
                </span>
                <input type="text" placeholder="도착지"/>
            </li>

            {/* 2. */}
            <li>
                <label htmlFor="userName">탑승자명</label>
                <input type="text" id="userName"/>
            </li>

            {/* 3. */}
            <li>
                <label htmlFor="userTime">탑승시간</label>
                <input type="time" id="userTime"/>
            </li>

            {/* 4. */}
            <li>
                <label htmlFor="userDate">탑승일</label>
                <input type="date" id="userDate"/>
            </li>

            {/* 5. */}
            <li>
                <dl>
                    <dt>탑승인원 선택</dt>
                    <dd>
                     <label htmlFor="userAdualt">성인</label>
                     <input id="userAdualt"/>
                    </dd>
                    <dd>
                     <label htmlFor="userChildren">소아</label>
                     <input id="userChildren"/>
                    </dd>
                    <dd>
                     <label htmlFor="userBaby">유아</label>
                     <input id="userBaby"/>
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

export default function AddReservation(){
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

    return(
        <>
         <ul className="reserve">
            <AddSelect/>

            <button type='button'>
                예매하기
            </button>
         </ul>
        </>
    )
}