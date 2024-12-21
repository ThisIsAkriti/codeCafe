const UserCard = ({user}) => {
    const {firstName , lastName , age , about , gender , photoUrl } = user;
    return(
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={photoUrl}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                <p>{about}</p>
                <p>Age:{age} Gender:{gender}</p>
                <div className="card-actions justify-center mt-6">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
            </div>
    )
}
export default UserCard;