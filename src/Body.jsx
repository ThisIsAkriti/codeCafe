import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Body = () => {
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