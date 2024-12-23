const UserCard = ({user}) => {
    const {firstName , lastName , age , about , gender , photoUrl, skills } = user;
    return(
            <div className="card bg-base-200 h-[550px] w-96 shadow-xl">
            <figure className="mt-4">
                <img
                src={photoUrl}
                className=" w-80 object-cover rounded-md"
                alt="My profile" />
            </figure>
            <div className="card-body pt-2 pb-6">
                <h2 className="card-title font-bold">{firstName} {lastName}</h2>
                <div>{about}</div>

                {age || gender? 
                (<div>{age}, {gender}</div>)
                 : 
                 (<div>Age , Gender</div>)}

                <div>{skills.join( ", ")}</div>
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
            </div>
    )
}
export default UserCard;