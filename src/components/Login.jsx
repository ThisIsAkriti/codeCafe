import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { base_url } from "../utils/constants";
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailId , setEmailId] = useState("frankle@gmail.com");
    const [password , setPassword] = useState("Fish#123");

    const handleLogin = async() => {
        try{
            // const data = await fetch("http://localhost:3000/login" , {
            //     method:"POST" , 
            //     headers:{
            //         "Content-Type": "application/json"
            //     },
            //     body:JSON.stringify({emailId , password})
            // });

            // if (!data.ok){ 
            //     throw new Error(`HTTP error! status: ${data.status}`);
            // }
            // const json = await data.json();
            // console.log(json);

            const res = await axios.post(
                base_url + "/login",
                {
                    emailId,
                    password
                },
                {withCredentials:true}
            );
            dispatch(addUser(res.data));
            return navigate('/');
        }catch(err){
            console.error("Error: " + err);
        }
    }
    return (
    <div className="flex justify-center mt-6">
        <div className="card bg-base-200 w-96 shadow-xl px-6 pb-8">
            <div className="card-body">
                <h2 className="card-title justify-center font-bold">LOGIN</h2>
            </div>

           <div className=" gap-y-8 flex flex-col">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Your Name" />
                </label>
                    
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
                <input value={emailId} type="text" className="grow" placeholder="Email" onChange={(e) => setEmailId(e.target.value)} />
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
                <input value={password} type="text" className="grow" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </label>
           </div>

           <div className="card-actions justify-center mt-8" >
                <button onClick={handleLogin} className="btn btn-primary">LogIn</button>
            </div>

        </div>
    </div>
    )
}
export default Login;