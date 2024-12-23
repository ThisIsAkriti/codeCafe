import axios from "axios";
import { base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
    const dispatch = useDispatch();
    const userRequest = useSelector((store) => store.request);
    const fetchRequest = async() => {
        try{
        const res = await axios.get(base_url + "/user/request/received" , {
            withCredentials:true
        });
        console.log(res.data.data);
        dispatch(addRequest(res?.data?.data))
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        fetchRequest();
    } , []);

    if(!userRequest) return <div>Loading...</div>
    if(userRequest.length === 0) return <div>No Request Found</div>
    return(
        <div>
            <h1 className="text-center font-bold text-2xl mb-4">Requests</h1>
            {
            userRequest.map((request) => {
                const {firstName, lastName , age, gender, about, skills, photoUrl} = request.fromUserId;
                
                return(
                    <div key={firstName}  className="flex justify-center">
                        <div className="flex items-center bg-base-200 rounded-md px-4 py-4 mb-4 gap-4 lg:w-1/2 md:w-4/6 w-11/12">
                            <div>
                                <img className="w-20 h-20 object-cover rounded-md" src={photoUrl} alt="user profile" />
                            </div>
                            <div>
                                <div className="font-bold">{firstName} {lastName}</div>
                                <div className="md:text-lg text-sm">{age}, {gender}</div>
                                <div className="font-semibold">{about}</div>
                                <div className="md:text-lg text-sm">{skills.join(", ")}</div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};
export default Requests;