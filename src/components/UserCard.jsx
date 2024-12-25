import axios from "axios";
import { base_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const { _id , firstName , lastName , age , about , gender , photoUrl, skills } = user;

    const handleSendRequest = async(status , userId) => {
        try{
            const res = await axios.post( base_url + "/request/send/" + status +"/"+  userId , 
                {},
                {withCredentials:true}
            );
            dispatch(removeFeed(userId));
        }catch(err){
            console.error(err);
        }
    }
    return(
            <div className="card bg-base-200 h-[550px] w-96 shadow-xl">
            <figure className="mt-6">
                <img
                src={photoUrl}
                className=" w-80 h-96 object-cover rounded-md"
                alt="My profile" />
            </figure>
            <div className="card-body pt-2 pb-6">
                <h2 className="card-title font-bold">{firstName} {lastName}</h2>
                <div>{about}</div>

                {age || gender? 
                (<div>{age}, {gender}</div>)
                 : 
                 (<div>Age , Gender</div>)}

                <div>{skills}</div>
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary" onClick={() => handleSendRequest("ignored" , _id)}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => handleSendRequest("interested" , _id)}>Interested</button>
                </div>
            </div>
            </div>
    )
}
export default UserCard;