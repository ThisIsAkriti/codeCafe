import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";
import {base_url} from "../utils/constants"
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
const EditProfile = ({user}) => {

    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [age , setAge] = useState(user.age);
    const [ gender , setGender ] = useState(user.gender);
    const [photoUrl ,setPhotoUrl ] = useState(user.photoUrl);
    const [about , setAbout] = useState(user.about);
    const [skills , setSkills] = useState(user.skills);
    const [error , setError] = useState("");
    const [alert , setAlert] = useState(false);
    const dispatch = useDispatch();
    
    const saveProfile = async() => {
        setError("");
        try{
            const res = await axios.patch(base_url + "/profile/edit" ,
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    photoUrl,
                    about,
                    skills
                } ,
                {withCredentials : true});
            dispatch(addUser(res?.data?.data));
            setAlert(true);

        }catch(err){
            setError(err.response.data);
            console.error(err.response.data);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setAlert(false);
        }, 3000);
        return () => clearInterval(interval);
    },[])

    return(
        <>
            <div className="flex justify-center gap-12 ">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-base-200 w-96 shadow-xl px-6 py-10 rounded-md">
                        <h1 className="text-center font-bold mb-6 text-2xl">Edit Profile</h1>
                        
                        <div className="flex gap-2 mb-4">
                            <div>
                                <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="input input-bordered w-full max-w-xs" 
                                />
                            </div>

                            <div>
                                <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="input input-bordered w-full max-w-xs" 
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <div>
                                <input
                                type="text"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="input input-bordered w-full max-w-xs" 
                                />
                            </div>

                            <div>
                                <input
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="input input-bordered w-full max-w-xs" 
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <input
                            type="text"
                            placeholder="Change Photo"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            className="input input-bordered w-full max-w-full" 
                            />
                        </div>

                        <div className="mb-4">
                            <input
                            type="text"
                            placeholder="About"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="input input-bordered w-full max-w-full" 
                            />
                        </div>

                        <div>
                            <input
                            type="text"
                            placeholder="Skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="input input-bordered w-full max-w-full" 
                            />
                        </div>

                        {error && <div
                         className="font-semibold text-red-700 text-center mt-4">
                            {error}   
                        </div>}

                        <div className="card-actions justify-center mt-8" >
                            <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                        </div>
                        
                    </div>
                </div>

                <UserCard user = {{firstName , lastName , age , about , gender , skills, photoUrl }} />

                {alert && <div className="toast toast-top toast-center">
                    <div className="alert alert-info">
                        <span>Changes Saved👍.</span>
                    </div>
                    <div className="alert alert-success">
                        <span>Profile Updated Successfully!</span>
                    </div>
                </div>}

            </div>
        </>
    )

}
export default EditProfile;