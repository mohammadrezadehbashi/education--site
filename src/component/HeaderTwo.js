import React from 'react';
import image from "../assets/Images/Academi.png";
import "./Header.css";
import { FiShoppingCart,FiHome } from "react-icons/fi";
import { Link,Outlet} from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { useAuth } from '../auth-Context';

const Header=()=>{

    const {counts}=useAuth();

return(
    <div className='bodyTwo col-width-header'>
        <div className='header-leftTwo'>
            <button className='button-profile-signupTwo'>پنل کاربری<IoPersonOutline className='icon-persTwo'/></button>
            <Link to="/"><FiShoppingCart className='Icon-shoppingTwo'/><div className='counterShowParent'><div className='counterShow' style={{display:counts===0? "none":""}}>{counts}</div></div></Link>
       <Link to="../"><FiHome className='Icon-searchTwo'/></Link>
        </div>
        <div className='header-right'>
        <img src={image} alt='image' className='image-brand'/>
         </div> 
        <Outlet />
    </div>
)
}
export default Header;