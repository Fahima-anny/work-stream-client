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
import Services from "../Layout/Home/Services/Services";
import AboutUs from "../Layout/Home/Home/AboutUs";
import About from "../Layout/Home/About/About";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Overview from "../Layout/Dashboard/Overview/Overview";

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

        { 
          path:"overview",
          element:<PrivateRoute> <Overview></Overview></PrivateRoute>
        },

        // employee routes 
        {
          path:"work-sheet",
          element: <EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>,

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

        // admin routes 
        {
          path:"all-employee-list",
          element: <AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute>
        },
        {
          path:"payroll",
          element: <AdminRoute><Payrol></Payrol></AdminRoute>
        },
      ]
    }
  ]);

  export default router ;