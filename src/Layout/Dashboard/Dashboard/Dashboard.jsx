import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../../../Hooks/useAdmin'

// import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {

const [role , roleLoading] = useAdmin() ;
// const [isHR, isHRLoading] = useHR() ;
// const {user} = useAuth() ;

console.log(role);

if(roleLoading){
    return <div className="min-h-[80vh] flex justify-center items-center">
    <span className="loading loading-dots loading-lg"></span>
   </div>
}

// if(isHRLoading){
//     return <div className="min-h-[80vh] flex justify-center items-center">
//     <span className="loading loading-dots loading-lg"></span>
//    </div>
// }

    return (
        <div>
       <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>

<div className="max-w-5xl mx-auto py-10 min-h-screen">
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
    <li><NavLink to="/dashboard/all-employee-list">All Employee List</NavLink></li>
    <li><NavLink to={`/dashboard/payroll`}>Payroll</NavLink></li>
   </>
   }
  {   role === "HR" 
    && <>
    <li><NavLink to="/dashboard/employee-list">Employee List</NavLink></li>
    <li><NavLink to={`/dashboard/progress`}>Progress</NavLink></li>
   </>}
 {  role === "Employee"  && <>
     <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
     <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
    </>}


     
    </ul>

  </div>
</div>
        </div>
    );
};

export default Dashboard;