import React from 'react';
import "../RouteDashboard/Dashboard.css";
import "./Support.css"
import RouteComponent from '../../component/RouteComponent/RouteComponent';
import imgs from '../../assets/Images/Online world-amico.svg';
const Support=()=>{
return(
    

    // {/* <RouteComponent/> */}
        <div className='contain-dashboard col-height-header'>  
       
        <div className='flex-Left-Right'>
            <img src={imgs} className='img-suporrt' alt='image'/>
            <div className='flex-support'>
           
            <div className='pack-inpt'>
                <p className='p-headInput'>ایمیل</p>
            <input type="text" className='borders-inputs  borders-inputsTwo'/>
            </div>

            <div className='pack-inpt'>
            <p className='p-headInput'>موضوع</p> 
            <input type="text" className='borders-inputs borders-inputsThree'/>
            </div> 

            <div className='pack-input'>
            <p className='p-headInput p-headInptTwo'>متن</p>
            <textarea type="text" className='borders-text-supp' placeholder='دیدگاه خود را بنویسید ...'/>
            </div>
            <div className='flexible-convert'>
            <button className='btn-save-convert'>ارسال</button>
            </div>
            </div>  

            </div>
            
        </div>
        
)
}
export default Support;