import React, { useState } from 'react';
import '../CardProduct.css';
import images from "../../assets/Images/jk1t5tzt.png";
import {Rating} from "react-simple-star-rating";
import { IoPersonOutline } from "react-icons/io5";
import { useAuth } from '../../auth-Context';
import { Link } from 'react-router-dom';
import "./inSlider.css";
const CardProductInSlider=()=>{
    // const {dataGraphist}=useAuth();
    const[rating,setRating]=useState(0);

    const handleRating=(rate)=>{
         setRating(rate);

    }
return(
    <>
    
    <div className='CardSlider'>
        
        <div className='persentOFFcontainer'>
    <div className='persentOFFtop'>
    </div>
    <div className='persentOFF'>
        <p>70%</p>
    </div>
    </div>

        <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
        <img src={images} alt='image' className='imageSlider'/>
        <hr className='hr'/>
        <div className='corse'>
            <div className="rowOne rowtwos">
            <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon='true' className='rating' size="14" />
            <p className='nam' style={{fontWeight:'bold'}}>دوره ای فرانت</p>
            </div>
            <div className='rowOne rowtwos'>
            <p className='nam'>تومان{" "}100.000</p>
            <p className='nam'>آقای حسینی<IoPersonOutline className='IconTeacherSlider'/></p>
            </div>
        </div>
        </div>
        <button className="buttonSlider"><Link to="/CoursePlay" id="Link-button">مشاهده</Link></button>
    </div>  
   </>
    
)
}
export default CardProductInSlider;