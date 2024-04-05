import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashBoard;