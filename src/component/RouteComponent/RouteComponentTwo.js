import React from 'react';
import './RouteComponent.css';
import images from "../../assets/Images/download.png";
import { IoPersonOutline,IoExitOutline } from "react-icons/io5";
import { BiCategoryAlt,BiSupport } from "react-icons/bi";
import{HiOutlineUsers} from "react-icons/hi";
import { Link,Routes,Route,BrowserRouter,Outlet } from 'react-router-dom';
import { useAuth } from '../../auth-Context';
import {Profile,Category} from './RouteComponent';
import { BsFileEarmarkRuled } from "react-icons/bs";
import HeaderTwo from "../HeaderTwo";
import Cooperation from "../../screen/RouteCooperation/Cooperation";

import{AiOutlineUsergroupAdd} from "react-icons/ai";


const RouteComponentTwo=()=>{
    // const {LoggedIn}=useAuth();
return(

    // LoggedIn ? <Profile/>:<Category/> 
    <>
    
{/* <HeaderTwo/> */}


<div className='ssss'>

    <div className='container-Route col-l-5'>
        
        <div className='div-image-profile'>
<img src={images} className='image-profile col-l-4'/>
</div>
<div className='row-name-selectImage'>
<p className='name-prof col-l-font'>محمد رضا دهباشی</p>
<button  className='circle-select'>+</button>
</div>
<div className="div-selection-list col-l-div-">
    <div className="-L"><Link to="/RouteComponent"><IoPersonOutline className='ic'/></Link></div>
    <div className="-R"><Link to="/RouteComponentTwo"><BiCategoryAlt className='ic'/></Link></div>
</div>
<div className='ul-route-'>
<ul className='ul-route'>
    <li><Link to="/Cooperation" className="li-route col-l-font"><AiOutlineUsergroupAdd className='icon-li'/>همکاری با مکین</Link></li>
    <li><Link to="/Rules" className="li-route col-l-font"><BsFileEarmarkRuled className='icon-li'/>قوانین سایت</Link></li>
    <li><Link to="/Support" className="li-route col-l-font"><BiSupport className='icon-li'/>پشتیبانی</Link></li>
    <li><Link to="/About" className="li-route col-l-font"><HiOutlineUsers className='icon-li'/>درباره ما</Link></li>
</ul>
</div>
<hr className='hhrr2'/>
   <Link to="/WarningTrustful" className='Link-exit'><p className='p-exit col-l-font'><IoExitOutline className='icon-li'/> خروج</p></Link>
    </div>
    </div>

    </>
    

)
}
export default RouteComponentTwo;
