import React from 'react';
import './App.css';
import HomeOne from './screen/HomeOne';
import { useAuth } from './auth-Context';
import { Authentication, UnAuthentication } from './Rowte';
import RouteComponent from './component/RouteComponent/RouteComponent';
import RouteComponentTwo from './component/RouteComponent/RouteComponentTwo';



function App() {
  const{LoggedIn}=useAuth();
  console.log('logineed'+LoggedIn);
  return ( 
    // <RouteComponent/>
    // <RouteComponentTwo/>
     <HomeOne/>
        // LoggedIn ? <Authentication/> : <UnAuthentication/>
      );
}

export default App;


