import React from 'react';
import "./ConfirmCode.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Calling-amico.svg";
const WarningNumPhone=()=>{
return(
    <div className='container-confirm'>
        <div className='f-flex f-flex2'>
        <button className='btn-x'>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje vajeWarning'>
            <h4 className=' bord border-code'>اخطار</h4>
        </div>
        <img src={ola} className='imgs-confirm imgs-code' alt='img'/>
        <p className='text-p-question'>آیا از شماره ی وارد شده اطمینان دارید ؟</p>
        <div className='vaje'>
            <p className=' bord border-code text-p-numPhone'>+989389490909</p>
        </div>
     <div className='flex-inputValid'>
     <button type="button"className='bbttnn b-entry btnValidation'>نه</button>
     <button type="button"className='bbttnn b-entry btnValidation'>بله</button>
     </div>
    </div>
)
}
export default WarningNumPhone;