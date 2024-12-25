import axios from "axios";
import { base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequest, removeRequest } from "../utils/requestSlice";

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

    const reviewRequest = async(status , _id) => {
        try{
            const res = await axios.post(base_url + "/request/review/" + status + "/" + _id ,
                {} ,
                {withCredentials:true}
            );
            dispatch(removeRequest(_id));
        }catch(err){
            console.error(err.response.data);
        }
    }

    useEffect(() => {
        fetchRequest();
    } , []);

    if(!userRequest) return;

    if(userRequest.length === 0) return <div className="font-bold text-center mt-6 text-2xl">No Request Found</div>
    
    return(
        <div>
            <h1 className="text-center font-bold text-2xl mb-4">Requests</h1>
            {
            userRequest.map((request) => {
                const { _id , firstName, lastName , age, gender, about, skills, photoUrl} = request.fromUserId;
                
                return(
                    <div key={_id}  className="flex justify-center">
                        <div className="lg:flex flex-row items-center justify-between bg-base-200 space-x-3 rounded-md px-4 py-4 mb-4 lg:w-1/2 md:w-4/6 w-11/12">
                            
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className="w-20 h-20 object-cover rounded-md" src={photoUrl} alt="user profile" />
                                </div>
                                
                                <div>
                                    <div className="font-bold">{firstName} {lastName}</div>
                                    <div className="lg:text-lg md:text-sm">{age? age : "age"}, {gender? gender : "gender"}</div>
                                    <div className="font-semibold">{about}</div>
                                    <div className="lg:text-lg md:text-sm">{skills.join(", ")}</div>
                                </div>
                            </div>

                            <div className="flex lg:flex-col justify-end space-x-4 lg:space-x-0 lg:space-y-4 space-y-0 mt-4 lg:mt-0">
                                <button
                                    onClick={() => reviewRequest("accepted" ,request._id )}
                                    className="md:btn md:btn-outline btn-success btn-sm btn-outline btn rounded-md">
                                    Accept
                                </button>
                                <button 
                                    onClick={() => reviewRequest("rejected" ,request._id )}
                                    className="md:btn md:btn-outline btn-error btn-sm btn-outline btn rounded-md">
                                    Reject
                                </button>
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