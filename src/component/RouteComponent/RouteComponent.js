import React, { useState } from 'react';
import './RouteComponent.css';

import { IoPersonOutline, IoExitOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineUsers, HiOutlineUserAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth-Context';

import { FiShoppingCart } from "react-icons/fi";
import HeaderTwo from "../HeaderTwo";
import "../../App.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";


import Dashboard from "../../screen/RouteDashboard/Dashboard";
import RouteOne from '../../screen/RouteOne/RouteOne';

import "../../screen/RouteDashboard/Dashboard";
import CardBuy from '../CardBuy/CardBuy';
import "../../screen/RouteBascket/Bascket";
import Rules from '../../screen/RouteRuls/Rules';
import Support from '../../screen/RouteSupport/Support';
import Cooperation from '../../screen/RouteCooperation/Cooperation';
import About from '../../screen/RouteAboutUs/About';
import WarningTrustful from '../../modals/Warning/WarningTrustful';
import SuccessModalSave from '../../modals/MassageModal/SuccessModalSave';


const RouteComponent = (props) => {

    const [selectUL, setSelectUL] = useState(1);
    const [selectLI, setSelectLI] = useState(0);

    const [file, setFile] = useState(null);


    const { ShowModal } = useAuth();
    console.log(ShowModal);

    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }


    const [routeSel, setRouteSel] = useState(1);
    console.log("r" + routeSel);

    const [stateExit, setStateExit] = useState(false);
    const ShowStateExit = () => {
        setStateExit(true);
    }
    const HideStateExit = () => {
        setStateExit(false);
    }

    //toast in layout1
    const { send } = useAuth();
    const { handleMessageSendShow } = useAuth();

    //cardbuy to bascket
    const { lists } = useAuth();

    return (

        <>
            <HeaderTwo />
            <div className='ssss'>
                {/* leftCard******************************* */}
                <>
                    {

                        routeSel === 1 ? (

                            // <div className='red'> 
                            <div className='contain-dashboard col-height-header'>
                                <h5 className='text-userProf'>مشخصات کاربری</h5>
                                <div className='flexible'>
                                    <div className='pack-input'>
                                        <p className='p-headInput'>ایمیل</p>
                                        <input type="text" className='borders-inputs' />
                                    </div>
                                    <div className='pack-input'>
                                        <p className='p-headInput'>نام کاربری</p>
                                        <input type="text" className='borders-inputs' />
                                    </div>
                                    <div className='pack-input'>
                                        <p className='p-headInput'>حوزه فعالیت </p>
                                        <input type="text" className='borders-inputs' />
                                    </div>
                                    <div className='pack-input'>
                                        <p className='p-headInput'>شماره</p>
                                        <input type="text" className='borders-inputs' />
                                    </div>
                                </div>
                                <div className='flexible-checkbox'>
                                    <p className='p-headInput'>جنسیت</p>
                                    <div className='flexible-ch'>
                                        <input type="checkbox" className='checkbox-inputs' /><p style={{ fontSize: "12px" }}>مرد</p>
                                        <input type="checkbox" className='checkbox-inputs' /><p style={{ fontSize: "12px" }}>زن</p>
                                    </div>
                                </div>
                                <div className='flexible-convert col-flexible-convert'>
                                    <button className='btn-save-convert' onClick={handleMessageSendShow}>ذخیره تغییرات</button>
                                    {send && (
                                        <SuccessModalSave />
                                    )}
                                </div>
                            </div>

                            //    </div>

                        ) : routeSel === 2 ?
                            (

                                <div className='contain-dashboard'>
                                    {lists.map((item) => (
                                        <CardBuy />
                                    )
                                    )}
                                    <div className='flexible-convert'>
                                        <div className='div-pay-courses'><div className='btn-pay-courses'>پرداخت</div>240000 تومان</div>
                                    </div>
                                </div>


                            ) : routeSel === 3 ?
                                (

                                    <div className='contain-dashboard'>
                                        {lists.map((item) => (
                                            <CardBuy />
                                        )
                                        )}
                                        <div className='flexible-convert'>
                                            {/* <button className='btn-save-convert'>ذخیره تغییرات</button> */}
                                        </div>
                                    </div>

                                ) :
                                routeSel === 4 ?
                                    (
                                        <Cooperation />
                                    ) :
                                    routeSel === 5 ?
                                        (
                                            <Rules />
                                        ) :
                                        routeSel === 6 ?
                                            (
                                                <Support />
                                            ) :
                                            routeSel === 7 ?
                                                (
                                                    <About />
                                                )
                                                : null
                    }
                </>
                {/* ****************************** * */}
                <div className='container-Route col-l-5 fx'>

                    <div className='div-image-profile '>
                        <img src={file} className='image-profile col-l-4' />
                    </div>
                    <div className='row-name-selectImage'>
                        <p className='name-prof col-l-font'>محمد رضا دهباشی</p>
                        <div className='circle-select'>
                            <input type='file' className='circle-select1' onClick={handleChange} />
                            <p className='ButtonPlusImage'>+</p>
                        </div>
                    </div>
                    <div className="div-selection-list col-l-div-">
                        <div className="-L">
                            {/* <Link to="/RouteComponent"> */}
                            <IoPersonOutline className='ic' style={{ color: selectUL === 1 ? "#45BFEC " : "" }} onClick={() => { setSelectUL(1) }} />
                            {/* </Link> */}
                        </div>
                        <div className="-R">
                            {/* <Link to="/RouteComponentTwo"> */}
                            <BiCategoryAlt className='ic' style={{ color: selectUL === 2 ? "#45BFEC " : "" }} onClick={() => { setSelectUL(2) }} />
                            {/* </Link> */}
                        </div>
                    </div>

                    {
                        selectUL === 1 ?
                            (
                                <>

                                    <div className='ul-route-' style={{ marginBottom: "20vh" }}>
                                        <ul className='ul-route'>
                                            <li><div className="li-route col-l-font" onClick={() => { setRouteSel(1) }} style={{ color: routeSel === 1 ? "#45BFEC " : "" }}><HiOutlineUsers className='icon-li' />داشبورد</div></li>

                                            <li>
                                                {/* <Link to="/Bascket" className="li-route col-l-font"> */}
                                                <div className="li-route col-l-font" onClick={() => { setRouteSel(2) }} style={{ color: routeSel === 2 ? "#45BFEC " : "" }}><FiShoppingCart className='icon-li' />سبد خرید</div>
                                                {/* </Link> */}
                                            </li>
                                            <li>
                                                {/* <Link to="/CourseMe" className="li-route col-l-font"> */}
                                                <div className="li-route col-l-font" onClick={() => { setRouteSel(3) }} style={{ color: routeSel === 3 ? "#45BFEC " : "" }}><HiOutlineUserAdd className='icon-li' />دوره های من</div>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) :
                            selectUL === 2 ?
                                (
                                    <>
                                        <div className='ul-route-' style={{ marginBottom: "14.7vh" }}>
                                            <ul className='ul-route'>
                                                <li className="li-route col-l-font" onClick={() => { setRouteSel(4) }} style={{ color: routeSel === 4 ? "#45BFEC " : "" }}>
                                                    {/* <Link to="/Cooperation" className="li-route col-l-font"> */}
                                                    <AiOutlineUsergroupAdd className='icon-li' />همکاری با مکین
                                                    {/* </Link> */}
                                                </li>
                                                <li className="li-route col-l-font" onClick={() => { setRouteSel(5) }} style={{ color: routeSel === 5 ? "#45BFEC " : "" }}>
                                                    {/* <Link to="/Rules" className="li-route col-l-font"> */}
                                                    <BsFileEarmarkRuled className='icon-li' />قوانین سایت
                                                    {/* </Link> */}
                                                </li>
                                                <li className="li-route col-l-font" onClick={() => { setRouteSel(6) }} style={{ color: routeSel === 6 ? "#45BFEC " : "" }}>
                                                    {/* <Link to="/Support" className="li-route col-l-font"> */}
                                                    <BiSupport className='icon-li' />پشتیبانی
                                                    {/* </Link> */}
                                                </li>
                                                <li className="li-route col-l-font" onClick={() => { setRouteSel(7) }} style={{ color: routeSel === 7 ? "#45BFEC " : "" }}>
                                                    {/* <Link to="/About" className="li-route col-l-font"> */}
                                                    <HiOutlineUsers className='icon-li' />درباره ما
                                                    {/* </Link> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) : null
                    }
                    <hr id='hhrr' />

                    <Link to="" className='Link-exit '><p className='p-exit col-l-font' onClick={ShowStateExit}><IoExitOutline className='icon-li' /> خروج</p></Link>
                    {
                        stateExit && (
                            <WarningTrustful HideStateExit={HideStateExit} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default RouteComponent;
