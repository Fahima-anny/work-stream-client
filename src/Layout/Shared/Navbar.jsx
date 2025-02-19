import { FaUnlockAlt } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../../Authentication/ThemeContext";



const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, signOutUser, userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        // console.log("user logged out");
        navigate("/login");
        toast("User Logged out")
      })
      .catch(Er => console.log(Er))
  }

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
 {user ?    <li><NavLink to="/dashboard/profile">Dashboard</NavLink></li> : ""}
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contacts">Contacts</NavLink></li>
  </>

  return (
    <div className="fixed z-50 backdrop-blur-sm bg-black/40 w-full">
      <div className="navbar mx-auto max-w-screen-xl text-white py-3">
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
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="md:text-2xl rounded-tl-xl rounded-br-xl py-1 px-1 md:px-3 border-l-4 border-l-white border-b-4 border-b-white  font-serif bg-black"><span className="font-semibold">Work</span><span className="text-blue-600 font-black">Stream</span></a>
        </div>
        <div className="navbar-center navMenu hidden lg:flex">
          <ul className=" menu menu-horizontal px-1 text-lg">
            {links}
          </ul>
        </div>
        <div className=" navbar-end gap-2">
          
          {
            user
              ? <>
                {
                  user && <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
                    <img
                      tabIndex={0} role="button"
                      className="m-1 w-12 h-12 object-cover object-center rounded-full"
                      src={user?.photoURL} alt="" />
                  <div
                  className="dropdown-content menu bg-base-100 rounded-box z-[1]  px-3 py-5 space-y-3 shadow min-w-[220px]"
                  >
                    <h2 className="text-base-content font-semibold text-xl">{user?.displayName}</h2>
                    <h2 className=" text-gray-500">{user?.email}</h2>
                    <h2 className=" text-gray-500 flex justify-between"><span>Role :</span> {userRole}</h2>
           <div className="flex gap-5 justify-between">
                    <h2 className=" text-gray-500">  Theme : </h2>
           
                    <label className="grid cursor-pointer place-items-center">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        />
                    </label>
           </div>
                    <button
                      tabIndex={0}
                      onClick={handleLogout}
                      className=" px-4 hover:bg-blue-200 bg-blue-100 duration-300 
                      py-2 border rounded-md w-full font-semibold text-blue-700 flex gap-2 justify-center items-center">Log Out <FiLogOut className="text-lg" /></button>
                      </div>
                  </div>
                }

              </>
              : <>
                <Link to='/login' className="px-4 hover:bg-[#02061156] duration-300 py-1  border rounded-md md:w-28 flex gap-2 items-center border-blue-300 text-blue-300">Login <FiLogIn className="text-lg" /></Link>
                <Link to='/register' className="px-4 hidden md:flex hover:bg-[#02061156] duration-300 py-1  border rounded-md gap-2 items-center border-blue-300 text-blue-300 ">Register <FaUnlockAlt className="text-lg" /></Link >
              </>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;