import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import {base_url} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((store) => store.user);
    const fetchUser = async() => {
        if(userData) return;
        
        try{
            const res = await axios.get(base_url + "/profile/view" , {
                withCredentials:true,
            });
            dispatch(addUser(res.data));
        }catch(err){
            if(err.status === 401){
                navigate("/login");
            }
            console.error(err);
        }
    }

    useEffect(() => {
        fetchUser();
    } , []);
    return (
        <> 
        <Navbar/>
        <Outlet/> 
        <Footer/>
        </>
        
        //Any children rout of body will render in outlet (here things will keep changing according to route) */ 
    )

}
export default Body;