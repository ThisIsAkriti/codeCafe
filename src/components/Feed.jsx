import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store)=> store.feed);
    const getFeed = async() => {
        if(feed) return;
        try{
            const res = await axios.get(base_url + "/user/feed" , {withCredentials:true});
            dispatch(addFeed(res?.data?.data));

        }catch(err){
            console.error(err.response.data);
        }
    }
    useEffect(() => {
        getFeed();
    } , []);

    if(!feed){
        return <div className="flex justify-center items-center mt-10 font-bold ">LOADING...</div>
    }
    return(
        feed && (
        <div className=" mt-6 flex justify-center items-center">
            <UserCard user = {feed[0]}/>
        </div> )
    )
}
export default Feed;