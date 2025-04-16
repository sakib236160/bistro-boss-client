// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch(error => console.log(error));
//   };

//   const navOption = (
//     <>
//       <li><Link to={"/"}>Home</Link></li>
//       <li><Link to={"/menu"}>Our Menu</Link></li>
//       <li><Link to={"/order/salad"}>Order Food</Link></li>
//       <li><Link to={"/secret"}>Secret</Link></li>
//       {
//         user ? (
//           <li>
//             <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
//           </li>
//         ) : (
//           <li>
//             <Link to={"/login"}>Login</Link>
//           </li>
//         )
//       }
//     </>
//   );

//   return (
//     <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black/30 text-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             {navOption}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Bistro Boss</a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navOption}</ul>
//       </div>

//       <div className="navbar-end space-x-3">
//         {user && (
//           <div className="flex items-center gap-2">
//             {user.photoURL && (
//               <img
//                 src={user.photoURL}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border-2 border-white"
//               />
//             )}
//             <span className="font-semibold hidden md:inline">{user.displayName}</span>
//           </div>
//         )}
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
















import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = ()=> {
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
    const navOption = (
      <>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/menu"}>Our Menu</Link>
        </li>
        <li>
        <Link to={"/order/salad"}>Order Food</Link>
        </li>
        <li>
          <Link to={"/secret"}>Secret</Link>
        </li>
        
        {
          user ? <> 
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <><li>
          <Link to={"/login"}>Login</Link>
          </li></>
        }
      </>
    );
  
    return (
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black/30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
  };
  
  export default NavBar;
