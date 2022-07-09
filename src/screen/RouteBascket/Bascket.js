import React from 'react';
import "../RouteDashboard/Dashboard.css";
import "./Bascket.css"
import RouteComponent from '../../component/RouteComponent/RouteComponent';
import CardBuy from '../../component/CardBuy/CardBuy';
const Bascket = () => {
    return (
        <div className='red'>
            <RouteComponent />
            <div className='contain-dashboard'>
                <CardBuy />
                <div className='flexible-convert'>
                    <div className='div-pay-courses'><div className='btn-pay-courses'>240000 تومان</div>پرداخت</div>
                </div>
            </div>
        </div>
    )
}
export default Bascket;