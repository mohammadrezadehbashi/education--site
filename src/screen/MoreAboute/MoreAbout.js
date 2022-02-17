import React from 'react';
import "./MoreAbout.css";
import Header from '../../component/Header';
import academi from "../../assets/Images/Academi.png";
import { HiArrowNarrowDown,HiOutlineBadgeCheck,HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiUserSearchLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import Footer from '../../component/Footer/Footer';
import MapApi from '../../component/MapApi/MapApi';

const MoreAbout=()=>{
return(
    <>
    <div className="container">
        </div>
        
        <div>

        <main className="opacity">
    <Header/>

        <div className='dsds'>
        <div id='flex-in-absolute'>
           
            <div className='divs-img-academi'>
            <img src={academi} className='img-academi'/>
            </div>
           
        </div>
        <div id='flex-in-absolute'>
        
        <div>
        <h5 className='paragrapfOne'>مکین را بشناسید</h5>
        <p className='paragrapfOne-p'>آموزش برای همه افراد از مبتدی تا پیشرفته<br/><span className='paragrapfOne-p-parttwo'>هر نوع آموزش</span></p>
       <div className='icon-divss'>
        <HiArrowNarrowDown className='Arrow-icon'/>
        </div>
        <div className='border-horizontal'></div>
        </div>
       
        </div>
        
        <div id='flex-in-absolute'>
        
        <div>
       <div className='icon-divss'>
        <AiOutlineClockCircle className='clock-icon'/>
        </div>

        <h5 className='paragrapfTwo'>سریع و ساده</h5>
        <p className='paragrapfTwo-p'>ما در مکین به شما یاد میدهیم که چگونه خودتون یاد بگیرید</p>
        
        <div className='border-horizontal'></div>
        </div>
       
        </div>

        <div id='flex-in-absolute'>
        
        <div>
       <div className='icon-divss'>
        <HiOutlineBadgeCheck className='clock-icon' id='check-icon'/>
        </div>
        <h5 className='paragrapfThree'>ماموریت مکین</h5>
        <p className='paragrapfOne-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه<br/><span className='paragrapfOne-p-parttwo'>روزنامه و مجله در ستون و سطرآنچنان که لازم است</span></p>

    
        <div className='border-horizontal' id='border-horizontalThree'></div>
        </div>
        
        </div>

        <div id='flex-in-absolute'>
       
        <div>
       <div className='icon-divss'>
        <RiUserSearchLine id='user-icon'/>
        </div>

        <h5 className='paragrapfFour'>هویت مکین</h5>
        <p className='paragrapfOne-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه<br/><span className='paragrapfOne-p-parttwo'>روزنامه و مجله در ستون و سطرآنچنان که لازم است</span></p>

    
        <div className='border-horizontal' id='border-horizontalThree'></div>
        </div>
        
        </div>
<div id='information'>
<div className='map'> <MapApi/> </div>
<div className='inform'>
    <div className='icon-border'><p>با ما در تماس باشید</p></div>
    <p className='text-p'>اطلاعات تماس و موقعیت ما بر روی نقشه</p>
<div className='tele-email'><p className='tele-p'><BsTelephone className="icon"/>{" "}021-22896524</p><p>|</p><p className='email-p'><IoMailOutline className="icon"/>{" "}info@makeen.ir</p></div>
<div className='location'><p className='location-p'><HiOutlineLocationMarker className='icon-location'/>تهران، خیابان فرجام، پلاک {" "} 49<br/><p className="location-p2">طبقه پنجم</p></p><div/>
</div>
</div>
</div>
</div>
        </main>
<Footer/>

        </div>
       
    </>
)
}
export default MoreAbout;