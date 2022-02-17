import React from "react";
import "./CardComment.css";
import img from "../../assets/Images/download.png"
import { Rating } from "react-simple-star-rating";
const CardComment = () => {
  return (
    <div className="container-comment">
      <div className="total-flex">
          <img className="img-prof" src={img} alt="image"/>
          <div className="name-rate">
              <h5 className="font-media">محمد رضا دهباشی</h5>
              <Rating size="28"/>
          </div>
          <div className="frame-comment">
         
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده <span><p className="date">1397/06/02</p></span> </p>
          </div>
          <div className="btns">
              <button className="btn-answer bn">پاسخ</button>
              <button className="btn-report bn">گزارش</button>
          </div>
      </div>
    </div>
  );
};
export default CardComment;
