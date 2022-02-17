import React from 'react';
import "./SuccessModal.css"
import {HiOutlineBadgeCheck } from 'react-icons/hi';
import { useAuth } from '../../auth-Context';

const SuccessModalSave=()=>{
    const {handleMessageSendHide}=useAuth();
return(
    <div className='mdl' onClick={handleMessageSendHide}>
    <div className='container-message'>
<HiOutlineBadgeCheck className='icon-message-modal'/>

    <p className='message-p'>اطلاعات با موفقیت بارگذاری شد</p>
    
    </div>
     </div>
)
}
export default SuccessModalSave;