import React, { useState } from 'react';
// import '../CardProduct.css';
import images from "../../assets/Images/jk1t5tzt.png";
import { Rating } from "react-simple-star-rating";
import { IoPersonOutline } from "react-icons/io5";
import { useAuth } from '../../auth-Context';
import { Link } from 'react-router-dom';
import "./inSlider.css";
const CardProductInSlider = () => {
    // const {dataGraphist}=useAuth();
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    }
    return (
        <>

            <div className='CardSlider'>

                <div className='persentOFFcontainer'>
                    <div className='persentOFFtop'>
                    </div>
                    <div className='persentOFF'>
                        <p>70%</p>
                    </div>
                </div>

                <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    <div>
                        <img src={images} alt='image' className='imageSlider' />
                    </div>
                    <hr className='hr' />
                    <div className='corse'>
                        <div className="rowOne rowtwos flex-row-in-slider">
                            <div className='rating-in-slider'>
                                <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon='true' className='rating' size="14" />
                            </div>
                            <div>
                                <p className='nam ' id='nam-In-slider' style={{ fontWeight: 'bold' }}>دوره فرانت</p>
                            </div>
                        </div>
                        <div id='row-teacher-toman'>
                            <div className="toman-Div">
                                <p className='nam' id='nam-toman-slider'>تومان{" "}100.000</p>
                            </div>
                            <div className='teacher-div'>
                                <div>
                                    <p className='nam' id='nam-teacher-slider'>آقای حسینی</p>
                                </div>
                                <div>
                                    <IoPersonOutline className='IconTeacherSlider' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="buttonSlider"><Link to="/CoursePlay" id="Link-button">مشاهده</Link></button>
            </div>
        </>

    )
}
export default CardProductInSlider;