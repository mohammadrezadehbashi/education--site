import React from "react";
import "./Footer.css";
import { IoPersonAddOutline, IoAlertCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import im from "../../assets/Images/Academi.png";
import ins from "../../assets/Images/download.png";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="col-12">
        <div id="right-footer">
          <div className="easy-access">
            <h4 className="h3-acsess-about">دسترسی</h4><h4>آسان</h4>
          </div>
          <div className="about-us">
            <h4 className="h3-acsess-about">درباره</h4><h4>ما</h4>
          </div>
          {/* <div>
          </div> */}
        </div>
        <div id="bottem-right-footer">
          <div className="sssd">
          <ul className="ul-access">
            <li>
              <IoPersonAddOutline className="Icon-ul" />
              <Link id="Links" to="/About">درباره ما</Link></li>
            <li>
              <IoAlertCircleOutline className="Icon-ul" />
              <Link id="Links" to="/Support">پشتیبانی</Link></li>
            <li>
              <IoAlertCircleOutline className="Icon-ul" />
              <Link id="Links" to="/Rules">قوانین و مقررات</Link></li>
          </ul>
          <div className="text-about">
            <p>شما باید تشخیص دهید که چه نوع ادبیاتی برای صفحه ی درباره ما وارتباط بهتر <br />با مشتریان است . این امر مستالزم شناختد مشتریان هدف، گروه سنی<br />وزمینه فعالیت شرکت است. ادبیات متناسب در صفحه یدرباره ی ما میتواند موجب<br /> ایجاد شناخت نسبی و اعتماد مشتریان شما گردد</p>
          </div>
          </div>
          <div className="llllefffft">
          <img src={im} alt="image" id="left-image" />
          </div>
        </div>


        <div className="symbols">
        <img src={ins} alt="image" className="symbol-sama"/>
        <img src={ins} alt="image" className="symbol-sama" id="symbol-saman"/>
        </div>  
        
         <div
          // style={{marginTop:"0%"}}
          >
        <div id="social-network">
        <FaInstagram/>
        <FaTelegramPlane className="telegram-icon"/>
        <FaWhatsapp/>
        </div>
        <hr className="hre"/>
        <p className="p-bottom">کلیه حقوق مادی و معنوی دوره ها متعلق به مکین می باشد</p>
        </div> 
      </div>
    </div>
  );
};
export default Footer;
