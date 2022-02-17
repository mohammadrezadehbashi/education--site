import React, { useEffect, useState } from 'react';
import "./ConfirmCode.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Mobile login-cuate.svg";
import "../RegisterAndSignIn/Register";
// import ima from "../../assets/Images/Academi.png";
import olas from "../../assets/Images/Login-rafiki.svg";
import olast from "../../assets/Images/Calling-amico.svg";
import olastration from "../../assets/Images/Mobile login-cuate.svg";
import { useAuth } from '../../auth-Context';

export const ValidConfirmCode = new RegExp('^[1]');

const ModalsConfirm=(prop)=>{
    // const [LoggedIn]=useAuth();
    const {LogIn}=useAuth()
    const[sel,setSel]=useState(1);
   
    const[num,setNum]=useState("");
const handleNum=(e)=>{
setNum(e.target.value);
}

//RegEx for ConfirmCode
// const [code,setCode]=useState("");
// const [CodeErr,setCodeErr]=useState(false);
// const Validate=()=>{
//     if(!ValidConfirmCode.test(code)){
//         setCodeErr(true);
//     }

// };
//RegEx for ConfirmCode??end    
// const d=()=>{
//     setSel(4);
// }
// const onClick=(event)=> {
   
//     d();
//     Validate();
//  }

;

console.log(sel);
return(
<>
<div className="modal">
<div className='container-confirm'> 

    {
    sel===1 ? 
    (
    // <div className="modal">
    // <div className='container-confirm'>
    <>
        <div className='f-flex f-flex2'>
        <button className='btn-x' onClick={prop.hide}>X</button>
      
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className='bord'>ورود و ثبت نام</h4>
        </div>
        <img src={ola} className='imgs-confirm' alt='img'/>
    <p className='p-text-bottom'>شماره موبایل یا پست الکترونیک خود را وارد کنید</p>
    <div className='flex-row-num'>
        <div className='nineteenEightdiv'>+98</div>
   <input type="text" className='inpt' placeholder='شماره' onChange={handleNum}/>
   </div>
   <button className='bbttnn' value="ورود" onClick={()=>{setSel(2)}}>
  </button>
  </>
    // </div>
    // </div>
    
)
: sel===2 ? 
(
    // <div className="modal">
// <div className='container-confirm'> 
<>

        <div className='f-flex f-flex2'>
        <button className='btn-x' onClick={prop.hide}>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje vajeWarning'>
            <h4 className=' bord border-code'>اخطار</h4>
        </div>
        <img src={olast} className='imgs-confirm imgs-code' alt='img'/>
        <p className='text-p-question'>آیا از شماره ی وارد شده اطمینان دارید ؟</p>
        <div className='vaje'>
            <p className=' bord border-code text-p-numPhone'>+98{num}</p>
        </div>
     <div className='flex-inputValid'>
     <button type="button"className='bbttnn b-entry btnValidation'  onClick={()=>{setSel(1)}}>نه</button>
     <button type="button"className='bbttnn b-entry btnValidation' onClick={()=>{setSel(3)}}>بله</button>
     </div>
     </>
    // </div>
    //  </div> 
    
)
   : sel===3 ? 
   (
       
    // <div className="modal">

        // <div className='container-confirm'>
        <>
        <div className='f-flex f-flex2'>
        <button className='btn-x' onClick={prop.hide}>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className=' bord border-code'>کد تایید</h4>
        </div>
        <img src={olastration} className='imgs-confirm imgs-code' alt='img'/>
     <div className='input-separat'>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
         <input type="text" className='blank-sep'/>
     </div>
     <button type="button"className='bbttnn b-entry' onClick={()=>{setSel(4)}}>ورود</button>
  {/* {CodeErr && <p> کد نوشته شده معتبر نیست </p>} */}
   <div className='flex-bottom'>
    <p>01:30 ارسال مجدد کد تایید</p>
    <a className='editNum' onClick={()=> {setSel(1)}}>ویرایش شماره تلفن همراه ؟</a>
    </div>
    </>

    // </div>
    //  </div> 
    )
   : sel===4 ? 
    (
    // <div className="modal">
        
        // <div className='modalR'>
    // <div className='container-confirm ffR'>
    <>
        <div className='f-flex f-flex2'>
        <button className='btn-x' onClick={prop.hide}>X</button>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje'>
            <h4 className=' bord border-code'>ثبت نام</h4>
        </div>
        <img src={olas} className='imgs-confirm imgs-code' alt='img'/>
     <div className='input-entry'>
         <input type="text" className='entry-sep' placeholder='ایمیل'/>
         <input type="text" className='entry-sep' placeholder='نام کاربری'/>
         <input type="text" className='entry-sep' placeholder='تکرار گذرواژه'/>
         <input type="text" className='entry-sep' placeholder='گذرواژه'/>
     </div>
     <button type="button"className='bbttnn b-entry' onClick={LogIn}>ورود</button>
     </>
    // </div>
    // </div>
    //  </div> 
    ) :null
   }
    </div>
    </div>

    </>
)
}
export default ModalsConfirm;

//   select==1 ? 
//      (<Bascket/>)
//     : select==2?
//      (<Dashboard/>)
//     : select==3?
//     (<CourseMe/>) :null 