import React from 'react';
import "../ConfirmCode/ConfirmCode.css";
import "./Register.css"
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Group 515.svg";
import { useState } from 'react/cjs/react.development';
import { useAuth } from '../../auth-Context';
import { FaRegWindowClose } from "react-icons/fa";

// import { validUserName, validPassword } from './regex.js';
export const validUserName = new RegExp('^[reza]');
export const validPassword = new RegExp('^[041]');

const SignIn = (prop) => {

    const { LogIn } = useAuth()
    const { LoggedIn } = useAuth();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameErr, setUserNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const Validate = () => {
        if (!validUserName.test(userName)) {
            setUserNameErr(true);
        }
        if (!validPassword.test(password)) {
            setPasswordErr(true);
        }
    }

    const handleWriteName = (e) => {
        setUserName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="modal">
            <div className='container-confirm'>
                <div className='f-flex f-flex2'>
                    <img src={im} className='imgs-Academi' alt='img' />
                    <div className='btn-x' onClick={prop.hiModal}>
                        <FaRegWindowClose size={22} color='red' />
                    </div>
                </div>
                <div className='vaje'>
                    <h4 className=' bord border-code borderBottom-text'>ورود به حساب</h4>
                </div>
                <img src={ola} className='imgs-confirm imgs-code' alt='img' />
                <div className='grid-inpt'>
                    <input type="text" className='entry-sep sepsTwo' vlaue={userName} placeholder='نام کاربری' onChange={handleWriteName} />
                    {userNameErr && <div className='entry-message' ><p>نادرست میباشد</p></div>}
                    <input type="text" className='entry-sep sepsTwo' vlaue={password} placeholder='گذرواژه' onChange={handlePassword} />
                    {passwordErr && <div className='entry-message' ><p>نادرست میباشد</p></div>}
                </div>
                <button type="button" className='bbttnn b-entry' onClick={Validate}>ورود</button>
            </div>
        </div>
    )
}
export default SignIn;