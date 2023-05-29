import AddAll from "./component/AddAll";
import Search from "./component/Search";
import {BiCalendarHeart} from 'react-icons/bi';
import './App.css';

function App() {
  return (
      <article>
        <div className="reservation">
          <h1>
          <BiCalendarHeart/>
          항공권 예매    
          </h1>
        </div>
        <div className="search">
          <Search/>
        </div>
        <div className="infomation">
          <AddAll/>
        </div>
      </article>
  );
}

export default App;
