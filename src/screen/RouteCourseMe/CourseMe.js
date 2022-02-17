import React from 'react';
import "../RouteDashboard/Dashboard.css";
import "../RouteBascket/Bascket.css"
import RouteComponent from '../../component/RouteComponent/RouteComponent';
import CardBuy from '../../component/CardBuy/CardBuy';
const CourseMe=()=>{
return(
    

    <div className='red'> 
    <RouteComponent/>
        <div className='contain-dashboard'>  
        <CardBuy/>
            <div className='flexible-convert'>
            {/* <button className='btn-save-convert'>ذخیره تغییرات</button> */}
            </div>
        </div>
        
   </div> 
)
}
export default CourseMe;