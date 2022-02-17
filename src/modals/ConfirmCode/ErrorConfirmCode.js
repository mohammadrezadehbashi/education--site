import React from 'react';
import "./ConfirmCode.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/111.svg";
const ErrorConfirmCode=()=>{
return(
    <div className='container-confirm'>
        <div className='f-flex f-flex2'>
        <button className='btn-x'>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje vaje2'>
            <h4 className='bord border-code'>کد تایید</h4>
        </div>
        <img src={ola} className='imgs-confirm' alt='img'/>
    <p className='p-text-bottom p-texts-bottom'>کد اشتباه است لطفا دوباره امتحان نمایید</p>
    <div className='input-separat'>
         <input type="text" className='blank-sep blank-sep2'/>
         <input type="text" className='blank-sep blank-sep2'/>
         <input type="text" className='blank-sep blank-sep2'/>
         <input type="text" className='blank-sep blank-sep2'/>
     </div>
     <button type="button"className='bbttnn b-entry'>ورود</button>
   <div className='flex-bottom'>
    <p className='p-send'>ارسال مجدد کد تایید: 01:20</p>
    </div>
    </div>

)
}
export default ErrorConfirmCode;