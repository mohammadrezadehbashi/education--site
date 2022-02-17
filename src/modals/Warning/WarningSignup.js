import React, { useState } from 'react';
import "../ConfirmCode/ConfirmCode.css";
import "./Warning.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Questions-amico.svg";
import SignIn from '../RegisterAndSignIn/SignIn';
const WarningSignup=()=>{
    const [switchModa,setSwitchModa]=useState(0)
return(
    <>
    {switchModa===0 ?(
       
        <div className='modal'>
    <div className='container-confirm'>
        <div className='f-flex f-flex2'>
        <button className='btn-x'>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje vajeWarning'>
            <h4 className=' bord border-code'>اخطار</h4>
        </div>
        <h5 className='text-p-question'>آیا از پیش ثبت نام کرده بودید ؟</h5>
        <img src={ola} className='imgs-confirm imgs-code marginTop-bottom' alt='img' />
     <div className='flex-inputValid'>
     <button type="button"className='bbttnn b-entry btnValidation'>نه</button>
     <button type="button"className='bbttnn b-entry btnValidation'>بله</button>
     </div>
     </div>
    </div>
     
    ):switchModa===1 ?(
<SignIn/>
    ):
    null
}
</>
)
}
export default WarningSignup;