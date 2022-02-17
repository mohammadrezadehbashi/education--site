import React from 'react';
import "../ConfirmCode/ConfirmCode.css";
import "./Register.css"
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Login-rafiki.svg";
const Register=()=>{
return(
    <div className='modalR'>
    <div className='container-confirm ffR'>
        <div className='f-flex f-flex2'>
        <button className='btn-x'>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className=' bord border-code'>ثبت نام</h4>
        </div>
        <img src={ola} className='imgs-confirm imgs-code' alt='img'/>
     <div className='input-entry'>
         <input type="text" className='entry-sep' placeholder='ایمیل'/>
         <input type="text" className='entry-sep' placeholder='نام کاربری'/>
         <input type="text" className='entry-sep' placeholder='تکرار گذرواژه'/>
         <input type="text" className='entry-sep' placeholder='گذرواژه'/>
     </div>
     <button type="button"className='bbttnn b-entry'>ورود</button>
    </div>
    </div>
)
}
export default Register;