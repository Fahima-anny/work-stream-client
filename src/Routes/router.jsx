import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home/Home";
import Contacts from "../Layout/Home/Contacts/Contacts";
import Main from "./Main";
import Login from "../Layout/AuthLayout/Login";
import Register from "../Layout/AuthLayout/Register";
import PrivateRoute from "../Authentication/VerifiesRoutes/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard/Dashboard";
import WorkSheet from "../Layout/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../Layout/Dashboard/Employee/PaymentHistory";
// import EmployeeList from "../Layout/Dashboard/HR-Routes/EmployeeList";
import EmployeeDetails from "../Layout/Dashboard/HR-Routes/EmployeeDetails";
import Progress from '../Layout/Dashboard/HR-Routes/Progress'  
import Payrol from "../Layout/Dashboard/Dashboard/AdminRoutes/Payrol";
import AllEmployeeList from "../Layout/Dashboard/Dashboard/AdminRoutes/AllEmployeeList";
import EmployeeRoute from "../Authentication/VerifiesRoutes/EmployeeRoute";
import HrRoute from "../Authentication/VerifiesRoutes/HrRoute";
import AdminRoute from "../Authentication/VerifiesRoutes/AdminRoute";
import EmployeeListHR from "../Layout/Dashboard/HR-Routes/EmployeeListHR";
import ProfilePage from "../Layout/Dashboard/ProfilePage";
import Blogs from "../Layout/Home/Blogs/Blogs";
import About from "../Layout/Home/About/About";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import OverviewEmployee from "../Layout/Dashboard/Overview/OverviewEmployee";
import OverviewHR from "../Layout/Dashboard/Overview/OverviewHR";
import OverviewAdmin from "../Layout/Dashboard/Overview/OverviewAdmin";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage> ,
      element: <Main></Main> ,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/contacts',
            element: <Contacts></Contacts>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [

        // common welcome route 
        // {
        //   index: true,
        //   element:<PrivateRoute> <ProfilePage></ProfilePage></PrivateRoute>
        // },
        { 
          path:"profile",
          element:<PrivateRoute> <ProfilePage></ProfilePage></PrivateRoute>
        },

        // employee routes 
        {
          path:"work-sheet",
          element: <EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>,

        },
        { 
          path:"overview-employee",
          element:<EmployeeRoute> <OverviewEmployee></OverviewEmployee></EmployeeRoute>
        },
        {
          path:"payment-history",
          element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute>
        },

        // hr routes 
        {
          path:"employee-list",
          element: <HrRoute><EmployeeListHR></EmployeeListHR></HrRoute>
        },
        {
          path:"details/:id",
          element: <HrRoute><EmployeeDetails></EmployeeDetails></HrRoute>,
           
        },
        {
          path:"progress",
          element: <HrRoute><Progress></Progress></HrRoute>
        },
        { 
          path:"overview-hr",
          element:<HrRoute> <OverviewHR></OverviewHR></HrRoute>
        },

        // admin routes 
        {
          path:"all-employee-list",
          element: <AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute>
        },
        {
          path:"payroll",
          element: <AdminRoute><Payrol></Payrol></AdminRoute>
        },
        { 
          path:"overview-admin",
          element:<AdminRoute> <OverviewAdmin></OverviewAdmin></AdminRoute>
        },
      ]
    }
  ]);

  export default router ;