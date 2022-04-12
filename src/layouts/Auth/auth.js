import React,  {useState } from "react";
import Logo from "assets/img/XAPORA TRANSPERENT blck.png";
import Login from '../../layouts/Login/login';
import SignUp from '../../layouts/SignUp/signup';
import './auth.css';

const Auth = () => {

    const [authMethod, setAuthMethod] = useState("login");

    return (
        <div>
             <div className='imgHero items-center flex justify-center mt-8 -mb-16'>
                <img src={Logo} width="150px" alt='logo' />
            </div>
            <div className='lg:w-2/6 md:w-2/4 sm:w-2/3 h-4/5 bg-gray-100 mx-auto my-24  '>
            <div className='flex justify-around'>
                <button className={`p-4 w-1/2 ${authMethod === "login"? "text-gray-800 border-b-2 border-gray-800 " : "" } text-gray-400`} checked={authMethod === "login"} onClick={() => setAuthMethod("login")} >Login</button>
                <button className={`p-4 w-1/2 ${authMethod === "signup"? "text-gray-800 border-b-2 border-gray-800 " : "" } text-gray-400`}checked={authMethod === "signup"} onClick={() => setAuthMethod("signup")}>Sign up</button>
            </div>
            {
                authMethod === "login" ? <Login/> : null
            }
             {
                authMethod === "signup" ? <SignUp/> : null
            }
        </div>
        </div>
       
    );
};
export default Auth;