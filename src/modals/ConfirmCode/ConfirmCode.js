import React from 'react';
import "./ConfirmCode.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Mobile login-cuate.svg";
const ConfirmCode=(prop)=>{
return(
    <div className="modal">
    <div className='container-confirm'>
        <div className='f-flex'>
        <button className='btn-x' onClick={prop.hide}>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className='bord'>ورود و ثبت نام</h4>
        </div>
        <img src={ola} className='imgs-confirm' alt='img'/>
    <p className='p-text-bottom'>شماره موبایل یا پست الکترونیک خود را وارد کنید</p>
   <input type="text" className='inpt' placeholder='شماره'/>
   <input type="submit" className='bbttnn' value="ورود"/>
    </div>
    </div>
)
}
export default ConfirmCode;