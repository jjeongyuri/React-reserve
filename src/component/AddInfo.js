import {BiRightArrow} from 'react-icons/bi';

export default function AddInfo(){
    return(
        <li>
            <dl>
                <dt>탑승자</dt>
                <dd>이름</dd>
                <dd>날짜</dd>
                <dd><dfn>탑승시간</dfn>시간</dd>
                <dd><dfn>서울(김포)</dfn>GMP</dd>
                <dd>
                    <span>
                    <BiRightArrow/>
                    </span>
                </dd>
                <dd><dfn>부산</dfn>PUS</dd>
                <dd>
                <button type="button">예약취소</button>
                </dd>
            </dl>
        </li>
    )
}