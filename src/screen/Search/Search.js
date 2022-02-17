import React from 'react';
import CardProduct from '../../component/CardProduct';
import Header from '../../component/Header';
import "./Search.css";
import Acardeon from '../../component/Acardeon/Acardeon';
import Dropdown from '../../component/Dropdown/Dropdown';
const Search=()=>{
return(
    <div className='container-search'>
        <Header/>
       <div className='text-rowOne-'>
       <h3 className='text-h1-rowOne'>back end</h3>
        </div>
         <div className='flex-inputs'>
        <input className="text-input"/>
        {/* <div className="text-input"> */}
      <div  className="acar">
      <Acardeon/>
      </div>
       
        <Dropdown/>
       

            <button className='btn-actions'>اعمال</button>
        </div> 
        <div className="cards">
        <CardProduct/> 
        </div>
        
    </div>
)
}
export default Search;