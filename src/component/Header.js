import React, { useState } from 'react';
import image from "../assets/Images/Academi.png";
import "./Header.css";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ModalsConfirm from '../modals/ConfirmCode/ModalsConfirm';
import { IoPersonOutline } from "react-icons/io5";
import { useAuth } from '../auth-Context';
const Header = (prop) => {

    const { LoggedIn } = useAuth();

    const [state, setState] = useState(false);
    // console.log("dd" + LoggedIn);
    const Show = () => {
        setState(true);
    }
    const hide = () => {
        setState(false);
    }

    //basket
    const { counts } = useAuth();

    return (
        <div className='body-header'>
            <div className='header-right'>
                <img src={image} alt='image' className='image-brand' />
                <nav>
                    <ul className='ul-header'>
                        <li><Link to='/RouteComponent' id='Link-li'>تدریس کن</Link></li>
                        <li><Link to="/RouteComponent" id='Link-li'>پشتیبانی</Link></li>
                        <li><Link to="/RouteComponent" id='Link-li'>قوانین سایت</Link></li>
                        <li> <Link to="/RouteComponent" id='Link-li'>درباره ما </Link></li>
                    </ul>
                </nav>
            </div>
            <div className='header-left'>
                {
                    LoggedIn ?
                        (
                            <>
                                <button className='button-profile-signupTwo'>پنل کاربری<IoPersonOutline className='icon-persTwo' /></button>
                            </>
                        )
                        :
                        (
                            <>
                                <button className='button-profile-signup' onClick={Show}>ثبت نام</button>
                                {state && (
                                    <ModalsConfirm hide={hide} />
                                )}
                            </>
                        )
                }

                <div className='icicic'>
                    <Link to="/RouteComponent"><FiShoppingCart className='Icon-shopping' /><div className='counterShowParent '>
                        <div className='counterShow cSPTWO' style={{ display: counts === 0 ? "none" : "" }}>{counts}</div></div></Link>
                    <Link to="/Search"><FiSearch className='Icon-search' /></Link>
                </div>
            </div>

        </div>
    )
}
export default Header;