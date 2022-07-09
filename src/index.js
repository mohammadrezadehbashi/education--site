import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './auth-Context';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import HomeOne from './screen/HomeOne';
import About from "./screen/RouteAboutUs/About";
import Rules from "./screen/RouteRuls/Rules";
import Support from "./screen/RouteSupport/Support";
import Cooperation from "./screen/RouteCooperation/Cooperation";
import Search from './screen/Search/Search';
import MoreAbout from "./screen/MoreAboute/MoreAbout";
import CoursePlay from './screen/CoursePlay/CoursePlay';
import WarningNumPhone from "./modals/ConfirmCode/WarningNumPhone";
import MoreProduct from "./screen/MoreProduct/MoreProduct";
import Dashboard from './screen/RouteDashboard/Dashboard';
import Bascket from './screen/RouteBascket/Bascket';
import CourseMe from './screen/RouteCourseMe/CourseMe'; 
import RouteComponent from './component/RouteComponent/RouteComponent'; 
// import RouteComponentTwo from './component/RouteComponent/RouteComponentTwo'; 
import WarningTrustful from './modals/Warning/WarningTrustful';
import ResumeSend from './screen/Resume/ResumeSend';
import RuleModal from './modals/RuleModal/RuleModal';

ReactDOM.render(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/HomeOne" element={<HomeOne />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Cooperation" element={<Cooperation />} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/MoreAbout" element={<MoreAbout/>} />
        <Route path="/CoursePlay" element={<CoursePlay/>}/>
        <Route path="/WarningNumPhone" element={<WarningNumPhone/>}/>
        <Route path="/MoreProduct" element={<MoreProduct/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Bascket" element={<Bascket/>}/>
        <Route path="/CourseMe" element={<CourseMe/>}/>
        <Route path="/RouteComponent" element={<RouteComponent/>}/>
        {/* <Route path="/" element={<RouteComponentTwo/>}/> */}
        <Route path="/ResumeSend" element={<ResumeSend/>}/>
        <Route path="/WarningTrustful" element={<WarningTrustful/>}/>
        <Route path="/RuleModal" element={<RuleModal/>}/>

        RuleModal
      </Routes> 
    </BrowserRouter>
    </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
