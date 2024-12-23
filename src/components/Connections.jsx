import { useEffect } from "react";
import { base_url } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
const Connections = () => {
    const dispatch = useDispatch();
    const userConnection = useSelector(store => store.connection);
    const fetchConnection = async() => {
        
        try{
            const res = await axios.get(base_url + "/user/connection" , 
                {withCredentials: true}
            );
            console.log(res.data);

            dispatch(addConnection(res.data.data));

        }catch(err){

        }
    }

    useEffect(() => {
        fetchConnection();
    } , []);

    if (!userConnection) return <div>Loading...</div>;
    
    if(userConnection.length === 0) return <div>No Connection!</div>

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-4">Connections</h1>

            {
                userConnection.map((connection) => {
                    const {firstName, lastName , age, gender, about, skills, photoUrl} = connection;
                    return(
                        <div className="flex justify-center">
                            <div key={connection.firstName} className="flex items-center bg-base-200 rounded-md px-4 py-4 mb-4 gap-4 lg:w-1/2 md:w-4/6 w-11/12">
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
    )
};
export default Connections;