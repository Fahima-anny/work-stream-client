import { NavLink, Outlet } from "react-router-dom";
import useRoleCheck from '../../../Hooks/useRoleCheck'
import { MdOutlineMenu } from "react-icons/md";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../../Hooks/useAuth";
// import { toast } from "react-toastify";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { GiProgression } from "react-icons/gi";
import { FaClipboardList, FaList } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi";

// import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {

  // const {signOutUser} = useAuth()
  // const navigate = useNavigate() ;
const [role , roleLoading] = useRoleCheck() ;

// const [isHR, isHRLoading] = useHR() ;
// const {user} = useAuth() ;

console.log(role);

// const handleLogOout = () => {
//       signOutUser()
//         .then(() => {
//           // console.log("user logged out");
//           navigate("/login");
//           toast("User Logged out")
//         })
//         .catch(Er => console.log(Er))
// }

if(roleLoading){
    return <div className="min-h-[80vh] flex justify-center items-center">
    <span className="loading loading-dots loading-lg"></span>
   </div>
}

    return (
        <div>

 <Helmet>
                            <title>Work Stream | Dashboard</title>
                        </Helmet>

       <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className=" drawer-button  lg:hidden">
    <MdOutlineMenu className="text-3xl m-3"/>
    </label>

<div className="max-w-5xl mx-auto px-3 xl:px-0 pt-0 lg:py-10 min-h-screen mb-10">
<Outlet></Outlet>
</div>

  </div>



  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4">
      {/* Sidebar content here */}
   <div className="flex flex-col justify-center items-center pt-5 pb-10">
   <a className="md:text-2xl rounded-tl-xl rounded-br-xl py-1 px-1 md:px-3 border-l-4 border-l-blue-600 border-b-4 border-b-blue-600  font-serif bg-black"><span className="font-semibold text-white">Work</span><span className="text-blue-600 font-black">Stream</span></a>
   <p className="pt-2 font-semibold text-2xl text-center">Employee Management</p>
   </div>



   { role === "admin"  
    && <>
    <li><NavLink to="/dashboard/profile" className="flex gap-2 items-center"><FaRegUserCircle className="text-xl ml-1"/>Profile</NavLink></li>
    <li><NavLink to="/dashboard/overview" className="flex gap-2 items-center"><HiOutlineChartPie className="text-xl "/>Overview</NavLink></li>
    <li><NavLink to="/dashboard/all-employee-list" className="flex gap-2 items-center"><FaList className="text-sm ml-1"/>All Employee List</NavLink></li>
    <li><NavLink to={`/dashboard/payroll`} className="flex gap-2 items-center"><LuBadgeDollarSign className="text-xl"/>Payroll</NavLink></li>
   </>
   }
  {   role === "HR" 
    && <>
      <li><NavLink to="/dashboard/profile" className="flex gap-2 items-center"><FaRegUserCircle className="text-xl ml-1"/>Profile</NavLink></li>
      <li><NavLink to="/dashboard/overview" className="flex gap-2 items-center"><HiOutlineChartPie className="text-xl"/>Overview</NavLink></li>
    <li><NavLink to={`/dashboard/employee-list`} className="flex gap-2 items-center"><FaClipboardList className="text-xl"/>Employee List</NavLink></li>
    <li><NavLink to={`/dashboard/progress`} className="flex gap-2 items-center"><GiProgression className="text-xl"/>Progress</NavLink></li>
   </>}
 {  role === "Employee"  && <>
  <li><NavLink to="/dashboard/profile" className="flex gap-2 items-center"><FaRegUserCircle className="text-xl ml-1"/>Profile</NavLink></li>
  <li><NavLink to="/dashboard/overview" className="flex gap-2 items-center"><HiOutlineChartPie className="text-xl"/>Overview</NavLink></li>
  <li><NavLink to="/dashboard/work-sheet" className="flex gap-2 items-center"><FaList className="text-sm ml-1"/>Work Sheet</NavLink></li>
  <li><NavLink to="/dashboard/payment-history" className="flex gap-2 items-center"><LuBadgeDollarSign className="text-xl"/>Payment History</NavLink></li>
    </>}

<div className="divider"></div>

    <li><NavLink to="/" className="flex gap-2 items-center"><FaHome className="text-2xl ml-1"/>Home</NavLink></li>
    <li><NavLink to="/contacts" className="flex gap-2 items-center"><TiContacts className="text-2xl"/>Contacts</NavLink></li>


    {/* <li><button onClick={handleLogOout} className="flex gap-2 items-center"><FaSignOutAlt className="text-xl ml-1"/>Logout </button></li> */}
     
    </ul>

  </div>
</div>
        </div>
    );
};

export default Dashboard;