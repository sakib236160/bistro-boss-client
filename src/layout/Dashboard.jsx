import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>user Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd></FaAd>Add A Review</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaList></FaList> My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;