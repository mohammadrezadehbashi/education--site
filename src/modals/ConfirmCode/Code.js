import React from 'react';
import "./ConfirmCode.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Group 499.svg";
const Code=()=>{
return(
    <div className='container-confirm'>
        <div className='f-flex f-flex2'>
        <button className='btn-x'>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className=' bord border-code'>کد تایید</h4>
        </div>
        <img src={ola} className='imgs-confirm imgs-code' alt='img'/>
     <div className='input-separat'>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
     </div>
     <button type="button"className='bbttnn b-entry'>ورود</button>
   <div className='flex-bottom'>
    <p>ارسال مجدد کد تایید: 01:20</p>
    <p>ویرایش شماره تلفن همراه ؟</p>
    </div>
    </div>
)
}
export default Code;