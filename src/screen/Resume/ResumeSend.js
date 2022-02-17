import React, { useState } from 'react';
import "./ResumeSend.css";
import HeaderTwo from '../../component/HeaderTwo';
import imag from '../../assets/Images/MaskGroup4.svg';
// import imag from '../../assets/Images/download.png';

import { Link } from 'react-router-dom';
import RuleModal from '../../modals/RuleModal/RuleModal';
// import { useState } from 'react/cjs/react.development';
import SuccessModal from '../../modals/MassageModal/SuccessModal';
import { useAuth } from '../../auth-Context';
// import { useAuth } from '../../auth-Context';
const ResumeSend=()=>{
    // const {setSelModalSuccess}=useAuth();
    const [selectRuleModal,selSelectRuleModal]=useState(false);
    
    const {send}=useAuth();
    const {handleMessageSendShow}=useAuth();
    // const [send,selSend]=useState(false);
    //  const handleMessageSendShow=()=>{
    //      selSend(!send)
    //  }
    //  const handleMessageSendHide=()=>{
    //     selSend(false)
    // }

    //  const handleMessageClose=()=> {
        // if(e.target.id === 27){
            // selSend(send)
        // }
         
   // }
   
//     useEffect(()=>{
   
//       const interval= setInterval(()=>{selSend(!send);},2000);
//         return()=>
// clearInterval(interval);}
// ,[]);


    const showModalRule=()=>{
        selSelectRuleModal(true);
}
const hideModalRule=()=>{
    selSelectRuleModal(false);
}
return(
    <div>
        <HeaderTwo/>
        <div className='flex-Container-resume'>
           <img src={imag} className="img-resume" alt="image"/>
            <div className='ri-ght'>
                <div className='border-bottom-blue'>
                    <h3>ارسال رزومه</h3>
                </div>
                <div>
                    <p className='head-tex'>ایمیل</p>
                    <input type="text" className='ipt iptTwo '/>
                </div>
                <div>
                    <p className='head-tex'>رشته ی آموزشی</p>
                    <input type="text" className='ipt iptThree'/>
                </div>
                <div>
                    <p className='head-tex'>انتخاب فایل</p>
                    <input type="file" className='ipt iptThree fourr'/>
                </div>
                <div className='row-check'>
              <p className='p-check-rule'><a onClick={showModalRule} className='aLinkToRule'>قوانین و مقررات</a> تدریس را مطالعه کرده ام و قبول کرده ام</p>
{selectRuleModal &&
    ( <RuleModal hideModalRule={hideModalRule}/>)
}
              <input type="checkbox" className='check-inp'/>
              </div>
              <div className='flexible-convert marg'>
            <button className='btn-save-convert' onClick={handleMessageSendShow}>ارسال</button>
           {send &&(
           <SuccessModal/>
           )
}
            </div> 
            </div>
        </div>
    </div>
)
}
export default ResumeSend;

