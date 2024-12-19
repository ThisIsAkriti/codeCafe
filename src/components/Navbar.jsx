import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
    const user = useSelector((store) => store.user);
    return (
    <div className="navbar bg-base-200">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">CodeCafe</Link>
        </div>
        {user && (
            <div className="flex-none">
                <div>Welcome , {user.firstName}</div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                    <div className="w-10 rounded-full ">
                        <img
                        alt="user profile"
                        src={user.photoUrl} />
                    </div>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                        </Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>)
        }
    </div>
    )
}
export default Navbar;