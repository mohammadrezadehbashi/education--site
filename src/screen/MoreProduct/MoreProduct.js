import React from 'react';
import CardProduct from '../../component/CardProduct';
import Header from '../../component/Header';
import "../Search/Search.css";
const MoreProduct=()=>{
return(
    <div className='container-More'>
        <Header/>
        <div className='text-rowOne-'>
       <h3 className='text-h1-rowOne'>back end</h3>
        </div>
        <div className="cards">
        <CardProduct/> 
        </div>
    </div>
)
}
export default MoreProduct;