import React from 'react';
import "./Dashboard.css";
import RouteComponent from '../../component/RouteComponent/RouteComponent';

const Dashboard=()=>{
return(
    <>
    <RouteComponent/>

    <div className='red'> 
        <div className='contain-dashboard col-height-header'>  
        <h5 className='text-userProf'>مشخصات کاربری</h5>
        <div className='flexible'>
            <div className='pack-input'>
                <p className='p-headInput'>ایمیل</p>
            <input type="text" className='borders-inputs'/>
            </div>
            <div className='pack-input'>
            <p className='p-headInput'>نام کاربری</p> 
            <input type="text" className='borders-inputs'/>
            </div> 
            <div className='pack-input'>
            <p className='p-headInput'>حوزه فعالیت </p>
            <input type="text" className='borders-inputs'/>
            </div>
            <div className='pack-input'>
            <p className='p-headInput'>شماره</p>
            <input type="text" className='borders-inputs'/>
            </div>
            </div>      
            <div className='flexible-checkbox'>
                <div className="jens-media">
            <p className='p-headInput' >جنسیت</p>

                </div>
            <div className='flexible-ch'>
             <input type="checkbox" className='checkbox-inputs' /><p style={{fontSize:"12px"}}>مرد</p>
             <input type="checkbox" className='checkbox-inputs' /><p style={{fontSize:"12px"}}>زن</p>
            </div>
            </div>
            <div className='flexible-convert col-flexible-convert'>
            <button className='btn-save-convert'>ذخیره تغییرات</button>
            </div>
        </div>
        
   </div>
   </> 
)
}
export default Dashboard;

// classname="packInput" در اینجا اضافیه پاکش کن پس از بررسی