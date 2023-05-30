import {BiRightArrow} from 'react-icons/bi';

export default function AddInfo({info,onDelete}){
    return(
        <li>
            <dl>
                <dt>탑승자</dt>
                <dd>{info.passengerName}</dd>
                <dt>좌석</dt>
                <dd>{info.seat}</dd>
                <dd>{info.boardingDate}</dd>
                <dd>
                    <dfn>탑승시간</dfn>
                    {info.boardingTime}
                </dd>
                <dd>
                    <dfn>{info.From}</dfn>
                    {info.CountryFrom}
                </dd>
                <dd>
                    <span>
                    <BiRightArrow style={{width:'25px',fontSize:'25px'
                    }}/>
                    </span>
                </dd>
                <dd>
                    <dfn>{info.To}</dfn>
                    {info.CountryTo}
                </dd>
                <dd>
                <button type="button"
                        onClick={()=>onDelete(info.id)}>예약취소</button>
                </dd>
            </dl>
        </li>
    )
}