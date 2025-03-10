import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { base_url } from "../utils/constants";
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailId , setEmailId] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [isLogin , setIsLogin] = useState(true);
    const handleLogin = async() => {
        try{
            const res = await axios.post(
                base_url + "/login",
                {
                    emailId,
                    password
                },
                {withCredentials:true}
            );
            dispatch(addUser(res.data.data));
            return navigate('/');
        }catch(err){
            setError(err.response.data.message);
            console.error(err.response.data.message)
        }
    }
    const handleSignup = async() => {
        try{
            const res = await axios.post(base_url + "/signup" ,
                {
                    firstName ,
                    lastName,
                    emailId ,
                    password
                } ,
                {withCredentials: true}
            );
            console.log(res.data);
            dispatch(addUser(res.data.data));
            return navigate("/profile");
        }catch(err){
            console.error(err.response.data);
        }
    }
    return (
    <div className="flex justify-center items-center min-h-[574px]">
        <div className="card bg-base-200 w-96 shadow-xl px-6 pb-2">
            <div className="card-body">
                <h2 className="card-title justify-center font-bold">{isLogin ? "LOG IN" : "SIGN UP"}</h2>
            </div>

           <div className=" gap-y-8 flex flex-col">
                { !isLogin && <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                </label>}

                { !isLogin && <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                </label>}
                    
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input value={emailId} type="text" className="grow" placeholder="Email" onChange={(e) => setEmailId(e.target.value)} required/>
                </label>
            
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input value={password} type="text" className="grow" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </label>
           </div>
           <p className="mt-5 text-red-700 text-center">{error}</p>
           <div className="card-actions justify-center mt-6 mb-6" >
                <button onClick={isLogin? handleLogin : handleSignup} className="btn btn-primary">{isLogin ? "Login" : "SignUp"}</button>
            </div>

            <div className="text-center mb-6 cursor-pointer" onClick={() => setIsLogin((value) => !value)}>
                {isLogin? 
                (<>New to CofeCafe? <span className="font-bold text-indigo-500">SignUp</span> </>) 
                    :
                (<>Already a member? <span className="font-bold text-indigo-500">LogIn</span></>)  
                }
            </div>

        </div>
    </div>
    )
}
export default Login;