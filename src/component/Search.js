import {BiSearchAlt} from 'react-icons/bi';

export default function Search({query,onChangeQuery}){
    return(
        <>
         <input type="text" 
                placeholder="search"
                query={query}
                onChange={(e)=>{onChangeQuery(e.target.value)}}
                /> 
         <BiSearchAlt 
                   style={{width:'30px',
                           fontSize:'25px',
                           marginLeft:'10px'
                           }}/>
        </>
    )
}