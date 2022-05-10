import React from 'react';
import "../ConfirmCode/ConfirmCode.css";
import "./Warning.css";
import im from "../../assets/Images/Academi.png";
import ola from "../../assets/Images/Questions-amico.svg";
import { useAuth } from '../../auth-Context';
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";

// import HomeOne from '../../screen/HomeOne';
// import { useState } from 'react/cjs/react.development';
const WarningTrustful=(prop)=>{
     const {LoggedIn}=useAuth();
    const {LogOut}=useAuth();
    // const[showModalExit,setShowModalExit]=useState(true);
    // const showAndHide=selectedModal ?  "modal hideMod":"modal showMod";
    // className={showAndHide}
console.log("out"+LoggedIn);
return(
    <div className='modal'>
    <div className='container-confirm fx fl' >
     <section className="ff">
        <div className='f-flex f-flex2 ff-ff'>
        {/* <button className='btn-x' onClick={prop.HideStateExit}>X</button> */}
        <div className='btn-x' onClick={prop.HideStateExit}>
          <FaRegWindowClose size={22} color='red' />
            </div>
        <img src={im} className='imgs-Academi' alt='img'/>
        </div>
        <div className='vaje vajeWarning'>
            <h4 className=' bord border-code'>اخطار</h4>
        </div>
        <h5 className='text-p-question'> از این کار مطمئنی ؟</h5>
        <img src={ola} className='imgs-confirm imgs-code marginTop-bottom' alt='img' />
     <div className='flex-inputValid'>
     <button type="button"className='bbttnn b-entry btnValidation beabtn' onClick={prop.HideStateExit}>نه</button>
     <Link to="../" className='llllink'><button type="button" className='bbttnn b-entry btnValidation beabtn' onClick={LogOut}>بله </button></Link>
     {/* {LoggedIn &&( 
<HomeOne/>
)} */}
     </div>


    {/* <Link to="/RouteComponent">
    </Link>*/}
    {/* <button className='btn-x' onClick={selectedModal}>X</button> */}

    {/* {selectedModal &&( 
<RouteComponent/>
)}   */}
     </section>
    </div>
    </div>
)
}
export default WarningTrustful;