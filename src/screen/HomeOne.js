import React, { useEffect, useState } from 'react';
import "./Home.css"
import Image from "../assets/Images/home4.png";
import anime from "../assets/Images/Online learning-amico.svg";
import { BsCheckLg } from "react-icons/bs";
import Header from "../component/Header";
import Footer from '../component/Footer/Footer';
import { useAuth } from "../auth-Context"
import CardProduct from '../component/CardProduct';
import { Link, Outlet } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
// import Introduction from "./Introduction";
import SliderSlick from "../component/SliderCraousel/SliderSlick";
import SliderSlickTwo from "../component/SliderCraousel/SliderSlickTwo";

import SignIn from "../modals/RegisterAndSignIn/SignIn";
const HomeOne = () => {
    const { data } = useAuth();
    const [selectModalEntry, setSelectModalEntry] = useState(false);

    const showModal = () => {
        setSelectModalEntry(true);
    }
    const hideModal = () => {
        setSelectModalEntry(false);
    }
    return (
        <>
            <div className="AppHome">
                <Header />

                {/* <img src={Image} alt="image" className="imageHome"/> */}
                <div className="imageHome">

                    {/* <img src={anime} alt="imageole" className="imageAnime"/> */}
                    <div className='text'>
                        <div style={{marginLeft:"-5%"}} className="yadgiri">
                            <h1 className='textLarge'>یادگیری به فاصله چند کلیک</h1>
                            <ul className='ul'>
                                <li><h3 className='Icon-border'>مزایای ثبت نام در مکین</h3></li>
                                <li><BsCheckLg className='Icon' /> دسترسی به بیش از هزاران ویدیو</li>
                                <li><BsCheckLg className='Icon' />پنل کاربری و کاربردی</li>
                                <li><BsCheckLg className='Icon' />امکان خرید و دانلود دوره های آموزشی</li>
                            </ul>

                            <div className='buttons-bottem'>
                                <Link to="/MoreAbout" ><button id='buttons-unity' className='button-KnowMore'>بیشتر بدانید</button></Link>
                                <button id='buttons-unity' className='button-entry' onClick={showModal}>ورود</button>
                                {selectModalEntry && (
                                    <SignIn hiModal={hideModal} />
                                )}
                            </div>
                        </div>

                        <div>
                            <img src={anime} alt="imageole" className="imageAni" />
                        </div>
                    </div>
                </div>
                <main
                //  style={{width:"100vw"}}
                >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {/* <p>{""}</p> */}
                        <h2 id='takhfifane-border'>تخفیفانه</h2>
                        {/* <p>{""}</p> */}
                    </div>
                    <SliderSlick />
                    <SliderSlickTwo />
                    <div id='line-Programmer'>
                        <h3 ><Link to="/MoreProduct" className='text-more'><BiArrowBack />{" "}بیشتر</Link></h3>
                        <h3 className='text-programing'>برنامه نویسی</h3>
                    </div>
                    <div id='CardProduct'>
                        <CardProduct />
                    </div>
                    <div id='line-Programmer'>
                        <h3 ><Link to="/MoreProduct" className='text-more'><BiArrowBack />{" "}بیشتر</Link></h3>
                        <h3 className='text-programing'>برنامه نویسی</h3>
                    </div>
                    <div id='CardProduct'>
                        <CardProduct />
                    </div>

                </main>
            </div>

            <Footer />
        </>
    );
};
export default HomeOne;