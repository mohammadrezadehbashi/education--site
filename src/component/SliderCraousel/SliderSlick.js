// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import CardComment from "../CardComment/CardComment";
import CardProduct from "../CardProduct";
import "./SliderSlick.css";
import CardProductInSlider from "./CardProductInSlider";
export default class SliderSlick extends Component {
  render() {
    const settings = {
      className:"center",
      dots: true,
      // arrows:true,
      centerMode:true,
      infinite: true,
      centerPadding:"0px",
      speed: 500,
      slidesToShow: 5,
      // focusOnSelect:true,

      // slidesToScroll: 3,
      // adaptiveHeight:true,
    };
    const settings2 ={
      slidesToShow: 5,
    };
    return (
      <div>
       
        <Slider {...settings}>
        {/* <div>
        <CardComment/>

        </div> */}
          <div className="dive">
            {/* <p className="div">125</p> */}
<CardProductInSlider/>         
          </div>
          <div className="dive">
          {/* <p className="div">2</p> */}
<CardProductInSlider/>         

          </div>
          <div className="dive">
          {/* <p className="div">3</p> */}
<CardProductInSlider/>         

          </div>
          <div className="dive">
          {/* <p className="div">4</p> */}
<CardProductInSlider/>         

          </div>
          <div className="dive">
          {/* <p className="div">5</p> */}
<CardProductInSlider/>         

          </div>
          <div className="dive">
          {/* <p className="div">6</p> */}
<CardProductInSlider/>         

          </div>
        </Slider>
      </div>
    );
  }
}