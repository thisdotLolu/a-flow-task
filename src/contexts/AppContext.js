import { useContext,createContext, useEffect, useState } from "react";
import BigAlert from "../components/BigAlert";
import Check from "../components/Check";





export const AppContext = createContext();

export const AppProvider=({children})=>{
    const[user, setUser] = useState({});
    const[error,setError] = useState(false);
    const[success,setSuccess] = useState(false);
    const[showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleVisibility = () => {
      setShowPassword(!showPassword);
    };
  

    const authStates=
        {
        locked:{
                icon:<BigAlert/>,
                message:'Too many attempts',
                subMessage:"you've been locked out"
        },
        success : {
            icon:<Check/>,
            message: 'Login Success!',
            subMessage:'Your dashboard is loading...'
        }
        }
    
    
    return (
        <AppContext.Provider value={{user,error,setError,setUser,showModal,setShowModal,success,setSuccess,authStates,showPassword,setShowPassword,handleToggleVisibility}}>
            {children}
        </AppContext.Provider>
    )
}
