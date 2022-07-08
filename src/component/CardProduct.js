import React, { useState } from 'react';
import './CardProduct.css';
import images from "../assets/Images/download.png";
import {Rating} from "react-simple-star-rating";
import { IoPersonOutline } from "react-icons/io5";
import { useAuth } from '../auth-Context';
import { Link } from 'react-router-dom';
const CardProduct=()=>{
    const {dataGraphist}=useAuth();
    const[rating,setRating]=useState(0);

    const handleRating=(rate)=>{
         setRating(rate);

    }
return(
    <>
    {dataGraphist.map((item)=>
    <div className='cont-pro-card'>
    <div className='Card'>
        
        <div style={{paddingLeft:"18px",paddingRight:"18px"}}>
       <div className='divImaGe'>
        <img src={item.picture} alt='image' className='image'/>
        </div>
        <hr className='hr'/>
        <div className='corse'>
            <div className="rowOne">
            <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon='true' className='rating' size="14" />
            <p style={{fontWeight:'bold'}}>{item.course}</p>
            </div>
            <div className='rowOne'>
            <p>تومان{" "}{item.price}</p>
            <p>{item.teacher}<IoPersonOutline className='IconTeacher'/></p>
            </div>
        </div>
        </div>
        <Link to="/CoursePlay" id="Link-button"><button className="button">مشاهده</button></Link>
    </div> 
    </div> 
    )}
   </>
    
)
}
export default CardProduct;