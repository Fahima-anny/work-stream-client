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
import EmployeeList from "../Layout/Dashboard/HR-Routes/EmployeeList";
import EmployeeDetails from "../Layout/Dashboard/HR-Routes/EmployeeDetails";
import Progress from '../Layout/Dashboard/HR-Routes/Progress'  
import Payrol from "../Layout/Dashboard/Dashboard/AdminRoutes/Payrol";
import AllEmployeeList from "../Layout/Dashboard/Dashboard/AdminRoutes/AllEmployeeList";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <p>error</p> ,
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
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [

        // employee routes 
        {
          path:"work-sheet",
          element: <WorkSheet></WorkSheet>
        },
        {
          path:"payment-history",
          element: <PaymentHistory></PaymentHistory>
        },

        // hr routes 
        {
          path:"employee-list",
          element: <EmployeeList></EmployeeList>
        },
        {
          path:"details/:email",
          element: <EmployeeDetails></EmployeeDetails>
        },
        {
          path:"progress",
          element: <Progress></Progress>
        },

        // admin routes 
        {
          path:"all-employee-list",
          element: <AllEmployeeList></AllEmployeeList>
        },
        {
          path:"payroll",
          element: <Payrol></Payrol>
        },
      ]
    }
  ]);

  export default router ;