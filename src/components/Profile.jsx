import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
    const user = useSelector((store) => store.user);
    if(!user){
        return <div className="mt-10 font-bold text-center text-3xl">Loading Profile</div>
    }
    return(
        user && (
        <EditProfile user = {user}/>)
    )
}
export default Profile;