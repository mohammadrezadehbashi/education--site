import React from 'react';
import "./CardBuy.css";
import img from "../../assets/Images/Group 515.svg";
import { FaRegWindowClose } from "react-icons/fa";
import {useAuth} from "../../auth-Context";
const CardBuy=()=>{

    //cardbuy to bascket
    // const {handleReduceBascket}=useAuth();
    const {lists}=useAuth();
    const {setLists}=useAuth();
    const {setCounts}=useAuth();
    const {counts}=useAuth();

    const handleAddCardBuy=()=>{
        let temp=[...lists];
        temp.pop(<CardBuy/>);
        setLists(temp);
        setCounts(counts-1);
    }
return(
    <div className="body-buycard">
        <div className='buycard-flex'>
<div className='buycard-left'>
<div className='buycard-flex-left'>
<div onClick={handleAddCardBuy}>
<FaRegWindowClose size={20} color='red' />
</div>

<div className='dvipCost'>
<p><del>90000 تومان</del></p>
<p>70000 تومان</p>
</div>
</div>
</div>
<div className='buycard-right'>
    <div className='buycard-flex-mgn'>
    <ul className='ul-buycard'>
        <li className='li-buycard'>دوره گرافیک</li>
        <li className='li-buycard'>استاد حسینی</li>
        <li className='li-buycard'>زمان برگزاری 13:22:45</li>
    </ul>
    <img src={img} className='img-buycard'/>
    </div>
</div>
        </div>
        <h1></h1>
    </div>
)
}
export default CardBuy;

