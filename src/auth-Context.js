import React, { createContext, useState } from "react";
import {getData} from "./data";
const AuthContext = createContext();

function AuthProvider({children}) {
    const dataGraphist=getData();
  
//switch login\log out
  const [LoggedIn, setLoggedIn] = useState(false);

  const LogIn = () => {
      setLoggedIn(true);
  };

  const LogOut = () => {
      setLoggedIn(false);
  };

//modal
  const[selectedModal,setSelectedModal]=useState(false);

  const ShowModal=()=>{
      setSelectedModal(true);
  }

  //message
  const [send,selSend]=useState(false);

     const handleMessageSendShow=()=>{
         selSend(!send)
     }
     const handleMessageSendHide=()=>{
        selSend(false)
    }


//basket add cardbuy
const[lists,setLists]=useState([]);
const [counts,setCounts]=useState(0);
const handleReduceBascket=()=>{
    if(counts<1){
    setCounts(counts-1)
    }
}

  const Value={
      LoggedIn,
      LogIn,
      LogOut,
      dataGraphist,
      selectedModal,
      ShowModal,
      send,
      handleMessageSendShow,
      handleMessageSendHide,
      lists,
      setLists,
      counts,
      setCounts,
      handleReduceBascket
  }
  return(
      <AuthContext.Provider value={Value}>
          {children}
      </AuthContext.Provider>
  )
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
