import React, { Component } from "react";
import Slider from "react-slick";
import CardComment from "../CardComment/CardComment";
import CardProduct from "../CardProduct";
import "./SliderSlick.css";
import CardProductInSlider from "./CardProductInSlider";
class SliderSlickTwo extends Component {
    
    render() {
      const settings2 = {
        className: "center",
        dots: true,
        // arrows:true,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        speed: 500,
        slidesToShow: 3,
      };
      return (
        <div>
  
          <Slider {...settings2} className="ssssliiickk2">
  
            <div className="dive">
              <CardProductInSlider />
            </div>
  
            <div className="dive">
              <CardProductInSlider />
            </div>
  
            <div className="dive">
              <CardProductInSlider />
            </div>
  
            <div className="dive">
              <CardProductInSlider />
            </div>
  
            <div className="dive">
              <CardProductInSlider />
            </div>
  
            <div className="dive">
              <CardProductInSlider />
            </div>
          
          </Slider>
        </div>
      );
    }
  }
  
  export default SliderSlickTwo