import AddAll from "./component/AddAll";
import Search from "./component/Search";
import {BiCalendarHeart} from 'react-icons/bi';
import './App.css';
import { useCallback, useEffect, useState } from "react";

function App() {
  // 데이터 가져오기useState
  const [list,setList] = useState([]);
  // search=>useState
  const [query,setQuery] = useState('');
  // sort()
  const [sortBy,setSortBy] = useState('passengerName');

  // useCallBack
  const Data = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setList(data))
  },[]);

  // useEffect
  useEffect(Data,[Data])

  // sort 함수
  const allData = list.filter((item)=>{
     return item.passengerName.toLowerCase().includes(query.toLowerCase()) ||
     item.From.includes(query) ||
     item.To.includes(query) ||
     item.seat.includes(query)
  })
    .sort((a,b)=>{
    return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
  })

    

  return (
      <article>
        <div className="reservation">
          <h1>
          <BiCalendarHeart/>
          항공권 예매    
          </h1>
        </div>
        <div className="search">
          <Search query={query}
                  onChangeQuery={(myQuery)=>setQuery(myQuery)}/>
        </div>
        <div className="infomation">
          <AddAll list={list}
                  setList={setList}
                  sortBy={sortBy}
                  onChangeSort={(mySort)=>setSortBy(mySort)}
                  dataChange={allData}
                  onChangeWrite={(myWrite)=>setList([...list,myWrite])}
                  />
        </div>
      </article>
  );
}

export default App;
