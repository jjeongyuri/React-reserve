import {BiSearchAlt} from 'react-icons/bi';

export default function Search(){
    return(
        <>
         <input type="text" placeholder="search"/> 
         <BiSearchAlt style={{
            width:'30px',fontSize:'25px',
            marginLeft:'5px'}}/>
        </>
    )
}