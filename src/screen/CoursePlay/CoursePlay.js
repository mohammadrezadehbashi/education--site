import React, { useState } from 'react';
import "./CoursePlay.css";
import FooterOne from '../../component/Footer/FooterOne';
import Header from '../../component/Header';
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { HiStatusOnline, HiOutlineBadgeCheck } from 'react-icons/hi';
import { IoMdPaper } from 'react-icons/io';
import { Rating } from "react-simple-star-rating";
import { Link, useParams, useLocation } from "react-router-dom";
import CardPlayList from '../../component/CardPlayList/CardPlayList';
import { BiArrowBack } from "react-icons/bi";
import CardProduct from '../../component/CardProduct';
import CardComment from '../../component/CardComment/CardComment';
import VideoPlayer from '../../component/videoPlayer/VideoPlayer';
import { useAuth } from '../../auth-Context';
import CardBuy from "../../component/CardBuy/CardBuy";
const CoursePlay = () => {


    // const handleAddBascket=()=>{
    //     setCounts(counts+1);
    // }
    //     const handleReduceBascket=()=>{
    //     if(counts<1){
    //     setCounts(counts-1);
    //     }
    // }

    const { lists } = useAuth();
    const { setLists } = useAuth();
    const { setCounts } = useAuth();
    const { counts } = useAuth();


    const handleAddCardBuy = () => {
        let temp = [...lists];
        temp.push(<CardBuy />);
        setLists(temp);
        setCounts(counts + 1);
    }

    return (
        <div className='container-course'>
            <Header />
            <div className='border-backend'>
                <h2 id='backend-text'>back end</h2>
            </div>
            <div id='horiz'>

                <div className='specification-course'>
                    <h5 className='h1-specifi'>مشخصات دوره</h5>
                    <hr className='hr-' />
                    <div id='horiz-small'>
                        <p style={{ fontWeight: "bold" }}>حسینی</p>
                        <p className='divs'>: مدرس{" "}<IoPersonOutline className='Icons-specifi' /></p>
                    </div>
                    <hr className='hr-' />
                    <div id='horiz-small'>
                        <p>01:55:05</p>
                        <p className='divs'>: مدت دوره{" "}<AiOutlineClockCircle className='Icons-specifi' /></p>
                    </div>
                    <hr />
                    <div id='horiz-small'>
                        <p>45</p>
                        <p className='divs'>: تعداد فیلم ها{" "}<BiBarChartSquare className='Icons-specifi' /></p>
                    </div>
                    <hr />
                    <div id='horiz-small'>
                        <p>آنلاین</p>
                        <p className='divs'>: وضعیت دوره{" "}<HiStatusOnline className='Icons-specifi' /></p>
                    </div>
                    <hr />
                    <div id='horiz-small'>
                        <p>7855</p>
                        <p className='divs'>: تعداد فروش{" "}<IoMdPaper className='Icons-specifi' /></p>
                    </div>
                    <hr />
                    <div className='xx'>
                        <Rating allowHalfIcon='true' className='rating-' size="15" />
                    </div>
                    <div id='horiz-small-cost'>
                        <div className='number-cost'>
                            <p className='number-cost-p'><del> 780.000{" "}تومان</del></p>
                            <p className='number-cost-p'>600.000{" "}تومان</p>
                        </div>
                        <h1 className='cost'>قیمت</h1>
                    </div>
                    {/* <Link to="/Warning"> */}
                    <div className='div-btn'>
                        {/* <Link to="/Bascket"> */}
                        <button className="btn" onClick={handleAddCardBuy}>افزودن به سبد خرید {counts}</button>
                        {/* </Link> */}
                    </div>
                    {/* </Link> */}
                </div>
                <div className='video-player'> <VideoPlayer /></div>

            </div>
            <div className='div-h1-text'>
                <h3 className='h1-text'>توضیحات دوره</h3>
            </div>
            <p className='explain'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،</p>
            <div className='div-h1-play'>
                <h3 className='play-h1'>لیست پخش دوره</h3>
            </div>
            <CardPlayList />
            <div className='row-related'>
                <div>
                    <p className='more-related'><Link className='linkmor' to="/MoreProduct"><BiArrowBack />{" "}بیشتر</Link></p>
                </div>
                <div className='div-h1-text'>
                    <h3 className='h1-text h1-Related'>دوره های مرتبط</h3>
                </div>
            </div>
            <div id="CardProduct">
                <CardProduct />
            </div>
            <div className='div-h1-text'>
                <h3 className='h1-text'>نگارش دیدگاه</h3>
            </div>
            <div className='div-h1-text'>
                <h4>قوانین ثبت نظر</h4>
            </div>
            <ul className='ul-comment'>
                <li><HiOutlineBadgeCheck id="icon-checkout" />برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید</li>
                <li><HiOutlineBadgeCheck id="icon-checkout" />فقط دانشجویان دوره میتوانند با ستاره نمره بدهند</li>
                <li><HiOutlineBadgeCheck id="icon-checkout" />نظرات را فقط به فارسی بنویسید</li>
                <li><HiOutlineBadgeCheck id="icon-checkout" />از کلمات درست ومناسب برای بیان نظر خود استفاده کنید</li>
            </ul>

            {/* <textarea placeholder=' دیدگاه خود را بنویسید...' className='placeholder-comments'></textarea> */}
            <div className='div-h1-text rate-margin'>
                <h5>امتیار : <Rating size="25"></Rating></h5>
            </div>
            <CardComment />
            <CardComment />
            <CardComment />
            <FooterOne />
        </div>
    )
}

export default CoursePlay;






