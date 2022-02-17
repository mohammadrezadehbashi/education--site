import React from 'react';
import "./SuccessModal.css"
import {HiOutlineBadgeCheck } from 'react-icons/hi';
import { useState } from 'react/cjs/react.development';
// import { useState } from 'react/cjs/react.development';
import { useAuth } from '../../auth-Context';

const SuccessModal=()=>{
    const {handleMessageSendHide}=useAuth();
return(
    <div className='mdl' onClick={handleMessageSendHide}>
    <div className='container-message'>
<HiOutlineBadgeCheck className='icon-message-modal'/>

    <p className='message-p'>اطلاعات با موفقیت فرستاده شد ؛ نتیجه آن از راه ایمیل به شما پیام رسانی خواهد شد </p>
    
    </div>
     </div>
)
}
export default SuccessModal;

