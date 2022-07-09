import React from "react";
import "./Footer.css";
import "./FooterOne.css";
import { IoPersonAddOutline, IoAlertCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import im from "../../assets/Images/Academi.png";
import ins from "../../assets/Images/download.png";
import namad from "../../assets/Images/ImageNested/download.jpg"
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="Footer-x-y">
                <div className="left-f-x-y">
                    <div>
                        <div className="lefffft-x-y">
                            <img src={im} alt="image" id="left-image-x-y" />
                        </div>
                        <div className="symbols-x-y">
                            <div>
                                <img src={namad} alt="image" className="symbol-sama-x-y" id="namad-e-x-y"/>
                            </div>
                            <div>
                                <img src={ins} alt="image" className="symbol-sama-x-y" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-f-x-y">
                    <div>
                        <div className="about-us-x-y">
                            <div className="radif-x-y">
                                <div style={{ marginLeft: "1%" }}>
                                    <h4 className="h3-acsess-about-x-y">درباره</h4>
                                </div>
                                <div>
                                    <h4>ما</h4>
                                </div>
                            </div>
                        </div>
                        <div className="text-about-x-y">
                            <p >شما باید تشخیص دهید که چه نوع ادبیاتی برای صفحه ی درباره ما وارتباط بهتر <br />با مشتریان است . این امر مستالزم شناختد مشتریان هدف، گروه سنی<br />وزمینه فعالیت شرکت است. ادبیات متناسب در صفحه یدرباره ی ما میتواند موجب<br />
                                ایجاد شناخت نسبی و اعتماد مشتریان شما گردد</p>
                        </div>
                    </div>
                </div>

                <div className="right-f-x-y">

                    <div>
                        <div className="about-us-x-y">
                            <div className="radif-x-y" style={{ marginRight: "12%" }}>
                                <div style={{ marginLeft: "2%" }}>
                                    <h4 className="h3-acsess-about-x-y">دسترسی</h4>
                                </div>
                                <div>
                                    <h4>آسان</h4>
                                </div>
                            </div>
                        </div>
                        <div style={{ direction: "rtl", marginRight: "2%" }}>
                            <ul className="ul-access">
                                <li>
                                    <IoPersonAddOutline className="Icon-ul" />
                                    <Link id="Links" to="">درباره ما</Link></li>
                                <li>
                                    <IoAlertCircleOutline className="Icon-ul" />
                                    <Link id="Links" to="">پشتیبانی</Link></li>
                                <li>
                                    <IoAlertCircleOutline className="Icon-ul" />
                                    <Link id="Links" to="">قوانین و مقررات</Link></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <div style={{backgroundColor:"#f1f4ff",paddingBottom:"1%"}}>
                <div id="social-network">
                    <FaInstagram />
                    <FaTelegramPlane className="telegram-icon" />
                    <FaWhatsapp />
                </div>
                <hr className="hre" />
                <p className="p-bottom">کلیه حقوق مادی و معنوی دوره ها متعلق به مکین می باشد</p>
            </div>
        </div>
    );
};
export default Footer;

